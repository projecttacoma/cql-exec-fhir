const cql = require('cql-execution');
const cqlfhir = require('../src/index');
const { load } = require('../src/load');
const { expect } = require('chai');
const axios = require('axios');

const FHIRv401XML = require('../src/modelInfos/fhir-modelinfo-4.0.1.xml.js');

const patientNumer = require('./fixtures/qicore4/tests-numer-EXM124-bundle.json');
const patientDenom = require('./fixtures/qicore4/tests-denom-EXM124-bundle.json');
const patientLuna = require('./fixtures/r4/Luna60_McCullough561_6662f0ca-b617-4e02-8f55-7275e9f49aa0.json');
const encounterDetails = { datatype: 'Encounter' };

const TEST_SERVER_URL = 'http://www.example.com';
const TEST_SERVER_INSTANCE = axios.create({
  baseURL: TEST_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/fhir+json',
    accept: 'application/fhir+json'
  }
});

describe('#R4 v4.0.1 with QICore 4.1.0 Data', () => {
  let patientSource;
  before(() => {
    patientSource = cqlfhir.PatientSource.FHIRv401();
  });

  beforeEach(() => {
    patientSource.loadBundles([patientNumer, patientDenom]);
  });

  afterEach(() => patientSource.reset());

  it('should properly iterate test patients', () => {
    // Check first patient
    const numer = patientSource.currentPatient();
    expect(numer.getId()).to.equal('numer-EXM124');
    // Check next patient
    const denom = patientSource.nextPatient();
    expect(denom.getId()).to.equal('denom-EXM124');
    // No more patients should result in undefined
    expect(patientSource.nextPatient()).to.be.undefined;
    expect(patientSource.currentPatient()).to.be.undefined;
  });

  it('should set the current patient to the next when nextPatient is called', () => {
    const originalCurrent = patientSource.currentPatient();
    const nextPatient = patientSource.nextPatient();
    const newCurrent = patientSource.currentPatient();
    expect(newCurrent).not.to.deep.equal(originalCurrent);
    expect(newCurrent).to.deep.equal(nextPatient);
  });

  it('should clone currentPatient each time it is called', () => {
    expect(patientSource.currentPatient()).to.deep.equal(patientSource.currentPatient());
    expect(patientSource.currentPatient()).to.not.equal(patientSource.currentPatient());
  });

  it('should find patient birthDate', () => {
    const pt = patientSource.currentPatient();
    // cql-execution v1.3.2 currently doesn't export the new Date class, so we need to use the .getDate() workaround
    expect(compact(pt.get('birthDate'))).to.deep.equal({
      value: new cql.DateTime.parse('1995-01-01').getDate()
    });
    expect(pt.get('birthDate.value')).to.deep.equal(new cql.DateTime.parse('1995-01-01').getDate());
  });

  it('should find patient extensions', () => {
    const pt = patientSource.currentPatient();
    const extensions = pt.get('extension');
    expect(extensions).to.have.length(2);
    //Check the first and last ones
    expect(compact(extensions[0])).to.deep.equal({
      url: { value: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race' },
      extension: [
        {
          url: { value: 'ombCategory' },
          value: {
            system: { value: 'urn:oid:2.16.840.1.113883.6.238' },
            code: { value: '2028-9' },
            display: { value: 'Asian' }
          }
        }
      ]
    });
  });

  it('should find records by type name (e.g., Encounter)', () => {
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by model name and type name (e.g., FHIR.Encounter)', () => {
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('FHIR.Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('FHIR.PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by model URL and type name (e.g., {http://hl7.org/fhir}Encounter)', () => {
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('{http://hl7.org/fhir}Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('{http://hl7.org/fhir}PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by QICore profile URL (e.g., http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter)', () => {
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords(
      'http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter',
      encounterDetails
    );
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const coverage = pt.findRecords(
      'http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-coverage'
    );
    expect(coverage).to.be.empty;
  });

  it('should find patient record by QICore profile URL', () => {
    const pt = patientSource.currentPatient();
    const patients = pt.findRecords(
      'http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-patient',
      {
        datatype: 'Patient'
      }
    );
    expect(patients).to.have.length(1);
  });

  it('should find patient with profile not in meta.profile when meta.profile checks are disabled', () => {
    const pt = patientSource.currentPatient();
    const patients = pt.findRecords('http://example.com/FakeStructureDefintion/fake-patient', {
      datatype: 'Patient'
    });
    expect(patients).to.have.length(1);
  });

  it('should error when attempting to find patient with profile not in meta.profile when check profiles is enabled', () => {
    const profileCheckPatientSource = cqlfhir.PatientSource.FHIRv401(true);
    profileCheckPatientSource.loadBundles([patientNumer, patientDenom]);
    const pt = profileCheckPatientSource.currentPatient();
    expect(() => {
      pt.findRecords('http://example.com/FakeStructureDefintion/fake-patient', {
        datatype: 'Patient'
      });
    }).to.throw(
      'Patient record with profile http://example.com/FakeStructureDefintion/fake-patient was not found'
    );
  });

  it('should not error when attempting to find resource other than Patient with profile not in meta.profile when check profiles is enabled', () => {
    const profileCheckPatientSource = cqlfhir.PatientSource.FHIRv401(true);
    profileCheckPatientSource.loadBundles([patientNumer, patientDenom]);
    const pt = profileCheckPatientSource.currentPatient();
    let encounters;
    expect(() => {
      encounters = pt.findRecords('http://example.com/FakeStructureDefintion/fake-encounter', {
        datatype: 'Encounter'
      });
    }).to.not.throw();
    expect(encounters).to.have.length(0);
  });

  it('should find a single record', () => {
    const pt = patientSource.currentPatient();
    const encounter = pt.findRecord('Encounter');
    expect(encounter.getTypeInfo().name).to.equal('Encounter');
    expect(encounter.getId()).to.equal('numer-EXM124-2');
    const paymentReconciliation = pt.findRecord('PaymentReconciliation');
    expect(paymentReconciliation).to.be.undefined;
  });
});

describe('AsyncPatient with QICore data', () => {
  it('does not error when find findRecords() request for Patient resource with valid profile with shouldCheckProfile flag set to true', async () => {
    const modelInfo = load(FHIRv401XML);
    const testPatient = new cqlfhir.AsyncPatient(
      patientNumer.entry[2].resource,
      modelInfo,
      TEST_SERVER_INSTANCE,
      true
    );

    await testPatient
      .findRecords('http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-patient', {
        datatype: 'Patient'
      })
      .then(
        resources => {
          expect(resources).to.have.length(1);
        },
        reason => {
          expect.fail('findRecords should not have been rejected');
        }
      );
  });

  it('errors when find findRecords() request for Patient resource with invalid profile with shouldCheckProfile flag set to true', async () => {
    const modelInfo = load(FHIRv401XML);
    const testPatient = new cqlfhir.AsyncPatient(
      patientNumer.entry[2].resource,
      modelInfo,
      TEST_SERVER_INSTANCE,
      true
    );

    await testPatient
      .findRecords('http://example.com/FakeStructureDefintion/fake-patient', {
        datatype: 'Patient'
      })
      .then(
        () => {
          expect.fail('findRecords should have been rejected');
        },
        reason => {
          expect(reason.message).to.equal(
            'Patient record with profile http://example.com/FakeStructureDefintion/fake-patient was not found.'
          );
        }
      );
  });

  it('errors when find findRecords() request for Patient resource with no meta.profile with shouldCheckProfile flag set to true', async () => {
    const modelInfo = load(FHIRv401XML);
    const testPatient = new cqlfhir.AsyncPatient(
      patientLuna.entry[0].resource,
      modelInfo,
      TEST_SERVER_INSTANCE,
      true
    );

    await testPatient
      .findRecords('http://example.com/FakeStructureDefintion/fake-patient', {
        datatype: 'Patient'
      })
      .then(
        () => {
          expect.fail('findRecords should have been rejected');
        },
        reason => {
          expect(reason.message).to.equal(
            'Patient record with profile http://example.com/FakeStructureDefintion/fake-patient was not found.'
          );
        }
      );
  });
});

function compact(obj) {
  if (Array.isArray(obj)) {
    return obj.map(o => compact(o));
  } else if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  const compacted = {};
  for (const prop in obj) {
    const value = obj[prop];
    if (value !== undefined) {
      compacted[prop] = compact(value);
    }
  }
  return compacted;
}
