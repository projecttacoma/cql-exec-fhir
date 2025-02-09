// This file exists so that these FHIR modelinfos can also be used in a browser where Node's 'fs' module isn't
// available.

module.exports = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns4:modelInfo
        name="FHIR"
        url="http://hl7.org/fhir"
        version="3.0.0"
        targetQualifier="fhir"
        patientClassName="FHIR.Patient"
        patientBirthDatePropertyName="birthDate.value"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:ns4="urn:hl7-org:elm-modelinfo:r1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Count" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="uuid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystem.UniqueId" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.NamingSystemIdentifierType"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="preferred" type="FHIR.boolean"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="date" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScriptRequestMethodCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssue.Mitigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" type="FHIR.CodeableConcept"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="example" type="FHIR.boolean"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="acronym" type="FHIR.string"/>
        <ns4:element name="source">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="exampleFor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="site" type="FHIR.CodeableConcept"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="dose" type="FHIR.Quantity"/>
        <ns4:element name="rate">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression.Finding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="basis" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.ExcludedSystem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Document" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.DocumentMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="origin">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Origin"/>
        </ns4:element>
        <ns4:element name="destination">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Destination"/>
        </ns4:element>
        <ns4:element name="metadata" type="FHIR.TestScript.Metadata"/>
        <ns4:element name="fixture">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Fixture"/>
        </ns4:element>
        <ns4:element name="profile">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="variable">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Variable"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Rule"/>
        </ns4:element>
        <ns4:element name="ruleset">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Ruleset"/>
        </ns4:element>
        <ns4:element name="setup" type="FHIR.TestScript.Setup"/>
        <ns4:element name="test">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Test"/>
        </ns4:element>
        <ns4:element name="teardown" type="FHIR.TestScript.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Attachment" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="data" type="FHIR.base64Binary"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="size" type="FHIR.unsignedInt"/>
        <ns4:element name="hash" type="FHIR.base64Binary"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="creation" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProvenanceEntityRole" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UnitsOfTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.Designation1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.Designation2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AddressType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relation" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" type="FHIR.ActionConditionKind"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="payeeType" type="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.AddItem"/>
        </ns4:element>
        <ns4:element name="error">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Error"/>
        </ns4:element>
        <ns4:element name="totalCost" type="FHIR.Money"/>
        <ns4:element name="unallocDeductable" type="FHIR.Money"/>
        <ns4:element name="totalBenefit" type="FHIR.Money"/>
        <ns4:element name="payment" type="FHIR.ClaimResponse.Payment"/>
        <ns4:element name="reserved" type="FHIR.Coding"/>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="processNote">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.ProcessNote"/>
        </ns4:element>
        <ns4:element name="communicationRequest">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Insurance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Param" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="keyword">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="mapping">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureDefinition.Mapping"/>
        </ns4:element>
        <ns4:element name="kind" type="FHIR.StructureDefinitionKind"/>
        <ns4:element name="abstract" type="FHIR.boolean"/>
        <ns4:element name="contextType" type="FHIR.ExtensionContext"/>
        <ns4:element name="context">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="contextInvariant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="baseDefinition" type="FHIR.uri"/>
        <ns4:element name="derivation" type="FHIR.TypeDerivationRule"/>
        <ns4:element name="snapshot" type="FHIR.StructureDefinition.Snapshot"/>
        <ns4:element name="differential" type="FHIR.StructureDefinition.Differential"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" type="FHIR.code"/>
        <ns4:element name="op" type="FHIR.FilterOperator"/>
        <ns4:element name="value" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="during" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.VaccinationProtocol" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doseSequence" type="FHIR.positiveInt"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="authority" type="FHIR.Reference"/>
        <ns4:element name="series" type="FHIR.string"/>
        <ns4:element name="seriesDoses" type="FHIR.positiveInt"/>
        <ns4:element name="targetDisease">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="doseStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseStatusReason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Package" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="container" type="FHIR.CodeableConcept"/>
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Medication.Content"/>
        </ns4:element>
        <ns4:element name="batch">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Medication.Batch"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" type="FHIR.boolean"/>
        <ns4:element name="availableStartTime" type="FHIR.time"/>
        <ns4:element name="availableEndTime" type="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceUseStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.DeviceUseStatementStatus"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="whenUsed" type="FHIR.Period"/>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="recordedOn" type="FHIR.dateTime"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="indication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RestfulCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Dosage" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="sequence" type="FHIR.integer"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="additionalInstruction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patientInstruction" type="FHIR.string"/>
        <ns4:element name="timing" type="FHIR.Timing"/>
        <ns4:element name="asNeeded">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="site" type="FHIR.CodeableConcept"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="dose">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="maxDosePerPeriod" type="FHIR.Ratio"/>
        <ns4:element name="maxDosePerAdministration" type="FHIR.Quantity"/>
        <ns4:element name="maxDosePerLifetime" type="FHIR.Quantity"/>
        <ns4:element name="rate">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="criteria" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.EventStatus"/>
        <ns4:element name="notDone" type="FHIR.boolean"/>
        <ns4:element name="notDoneReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="performed">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.Performer"/>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="report">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="complication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="complicationDetail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="followUp">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="focalDevice">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.FocalDevice"/>
        </ns4:element>
        <ns4:element name="usedReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="usedCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="inforce" type="FHIR.boolean"/>
        <ns4:element name="insurance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponse.Insurance"/>
        </ns4:element>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="error">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponse.Error"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParameter" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="base">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.SearchParamType"/>
        <ns4:element name="derivedFrom" type="FHIR.uri"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="expression" type="FHIR.string"/>
        <ns4:element name="xpath" type="FHIR.string"/>
        <ns4:element name="xpathUsage" type="FHIR.XPathUsageType"/>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="comparator">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchComparator"/>
        </ns4:element>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchModifierCode"/>
        </ns4:element>
        <ns4:element name="chain">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchParameter.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement.CodeFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="valueSet">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="valueCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="valueCoding">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="valueCodeableConcept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeamStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataElementStringency" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Appointment" retrievable="true" primaryCodePath="serviceType" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.AppointmentStatus"/>
        <ns4:element name="serviceCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="serviceType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="indication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priority" type="FHIR.unsignedInt"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="supportingInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="minutesDuration" type="FHIR.positiveInt"/>
        <ns4:element name="slot">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="incomingReferral">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Appointment.Participant"/>
        </ns4:element>
        <ns4:element name="requestedPeriod">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="direction" type="FHIR.AssertionDirectionType"/>
        <ns4:element name="compareToSourceId" type="FHIR.string"/>
        <ns4:element name="compareToSourceExpression" type="FHIR.string"/>
        <ns4:element name="compareToSourcePath" type="FHIR.string"/>
        <ns4:element name="contentType" type="FHIR.ContentType"/>
        <ns4:element name="expression" type="FHIR.string"/>
        <ns4:element name="headerField" type="FHIR.string"/>
        <ns4:element name="minimumId" type="FHIR.string"/>
        <ns4:element name="navigationLinks" type="FHIR.boolean"/>
        <ns4:element name="operator" type="FHIR.AssertionOperatorType"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="requestMethod" type="FHIR.TestScriptRequestMethodCode"/>
        <ns4:element name="requestURL" type="FHIR.string"/>
        <ns4:element name="resource" type="FHIR.FHIRDefinedType"/>
        <ns4:element name="response" type="FHIR.AssertionResponseTypes"/>
        <ns4:element name="responseCode" type="FHIR.string"/>
        <ns4:element name="rule" type="FHIR.TestScript.Rule2"/>
        <ns4:element name="ruleset" type="FHIR.TestScript.Ruleset1"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
        <ns4:element name="validateProfileId" type="FHIR.id"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="warningOnly" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Ruleset1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rulesetId" type="FHIR.id"/>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Rule3"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fixedVersion">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExpansionProfile.FixedVersion"/>
        </ns4:element>
        <ns4:element name="excludedSystem" type="FHIR.ExpansionProfile.ExcludedSystem"/>
        <ns4:element name="includeDesignations" type="FHIR.boolean"/>
        <ns4:element name="designation" type="FHIR.ExpansionProfile.Designation"/>
        <ns4:element name="includeDefinition" type="FHIR.boolean"/>
        <ns4:element name="activeOnly" type="FHIR.boolean"/>
        <ns4:element name="excludeNested" type="FHIR.boolean"/>
        <ns4:element name="excludeNotForUI" type="FHIR.boolean"/>
        <ns4:element name="excludePostCoordinated" type="FHIR.boolean"/>
        <ns4:element name="displayLanguage" type="FHIR.code"/>
        <ns4:element name="limitedExpansion" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.ValuedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionEyes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Binding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="strength" type="FHIR.BindingStrength"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="valueSet">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="include" type="FHIR.ExpansionProfile.Include"/>
        <ns4:element name="exclude" type="FHIR.ExpansionProfile.Exclude"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EncounterStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinitionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PublicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.MeasureReportStatus"/>
        <ns4:element name="type" type="FHIR.MeasureReportType"/>
        <ns4:element name="measure" type="FHIR.Reference"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="reportingOrganization" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="group">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group"/>
        </ns4:element>
        <ns4:element name="evaluatedResources" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConsentDataMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="representation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PropertyRepresentation"/>
        </ns4:element>
        <ns4:element name="sliceName" type="FHIR.string"/>
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="slicing" type="FHIR.ElementDefinition.Slicing"/>
        <ns4:element name="short" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.markdown"/>
        <ns4:element name="comment" type="FHIR.markdown"/>
        <ns4:element name="requirements" type="FHIR.markdown"/>
        <ns4:element name="alias">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="min" type="FHIR.unsignedInt"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="base" type="FHIR.ElementDefinition.Base"/>
        <ns4:element name="contentReference" type="FHIR.uri"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Type"/>
        </ns4:element>
        <ns4:element name="defaultValue">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="meaningWhenMissing" type="FHIR.markdown"/>
        <ns4:element name="orderMeaning" type="FHIR.string"/>
        <ns4:element name="fixed">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="pattern">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="example">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Example"/>
        </ns4:element>
        <ns4:element name="minValue">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="maxValue">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="maxLength" type="FHIR.integer"/>
        <ns4:element name="condition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="constraint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Constraint"/>
        </ns4:element>
        <ns4:element name="mustSupport" type="FHIR.boolean"/>
        <ns4:element name="isModifier" type="FHIR.boolean"/>
        <ns4:element name="isSummary" type="FHIR.boolean"/>
        <ns4:element name="binding" type="FHIR.ElementDefinition.Binding"/>
        <ns4:element name="mapping">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Mapping"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Attester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CompositionAttestationMode"/>
        </ns4:element>
        <ns4:element name="time" type="FHIR.dateTime"/>
        <ns4:element name="party" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="udi" type="FHIR.Device.Udi"/>
        <ns4:element name="status" type="FHIR.FHIRDeviceStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="manufacturer" type="FHIR.string"/>
        <ns4:element name="manufactureDate" type="FHIR.dateTime"/>
        <ns4:element name="expirationDate" type="FHIR.dateTime"/>
        <ns4:element name="model" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="owner" type="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="safety">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapSourceListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcedureRequest" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="requisition" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.RequestStatus"/>
        <ns4:element name="intent" type="FHIR.RequestIntent"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" type="FHIR.boolean"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="asNeeded">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.ProcedureRequest.Requester"/>
        <ns4:element name="performerType" type="FHIR.CodeableConcept"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="required" type="FHIR.boolean"/>
        <ns4:element name="validated" type="FHIR.boolean"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="origin">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="destination" type="FHIR.integer"/>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="capabilities" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationOutcome.Issue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="severity" type="FHIR.IssueSeverity"/>
        <ns4:element name="code" type="FHIR.IssueType"/>
        <ns4:element name="details" type="FHIR.CodeableConcept"/>
        <ns4:element name="diagnostics" type="FHIR.string"/>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="expression">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidanceResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="requestId" type="FHIR.id"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="module" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.GuidanceResponseStatus"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrenceDateTime" type="FHIR.dateTime"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="evaluationMessage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="outputParameters" type="FHIR.Reference"/>
        <ns4:element name="result" type="FHIR.Reference"/>
        <ns4:element name="dataRequirement">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Endpoint" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="protocol" type="FHIR.Coding"/>
        <ns4:element name="address" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetric" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="unit" type="FHIR.CodeableConcept"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="parent" type="FHIR.Reference"/>
        <ns4:element name="operationalStatus" type="FHIR.DeviceMetricOperationalStatus"/>
        <ns4:element name="color" type="FHIR.DeviceMetricColor"/>
        <ns4:element name="category" type="FHIR.DeviceMetricCategory"/>
        <ns4:element name="measurementPeriod" type="FHIR.Timing"/>
        <ns4:element name="calibration">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceMetric.Calibration"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Flag" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FlagStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EnrollmentRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeam" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.CareTeamStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CareTeam.Participant"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataElement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="stringency" type="FHIR.DataElementStringency"/>
        <ns4:element name="mapping">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataElement.Mapping"/>
        </ns4:element>
        <ns4:element name="element">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" type="FHIR.Ratio"/>
        <ns4:element name="substance">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" type="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ResourceType"/>
        <ns4:element name="profile" type="FHIR.uri"/>
        <ns4:element name="compartment">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Compartment"/>
        </ns4:element>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingManifest.Study" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="imagingStudy" type="FHIR.Reference"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="series">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingManifest.Series"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="priority" type="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Constraint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="key" type="FHIR.id"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="severity" type="FHIR.ConstraintSeverity"/>
        <ns4:element name="human" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
        <ns4:element name="xpath" type="FHIR.string"/>
        <ns4:element name="source" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Discriminator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="FHIR.DiscriminatorType"/>
        <ns4:element name="path" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceClinicalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" type="FHIR.integer"/>
        <ns4:element name="profile" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="criteria" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcessRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="action" type="FHIR.ActionList"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="nullify" type="FHIR.boolean"/>
        <ns4:element name="reference" type="FHIR.string"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProcessRequest.Item"/>
        </ns4:element>
        <ns4:element name="include">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="exclude">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanActivityStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionList" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Nutrient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" type="FHIR.CodeableConcept"/>
        <ns4:element name="amount" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="reference" type="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Age" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeam.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="member" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="number" type="FHIR.unsignedInt"/>
        <ns4:element name="modality" type="FHIR.Coding"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="numberOfInstances" type="FHIR.unsignedInt"/>
        <ns4:element name="availability" type="FHIR.InstanceAvailability"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" type="FHIR.Coding"/>
        <ns4:element name="laterality" type="FHIR.Coding"/>
        <ns4:element name="started" type="FHIR.dateTime"/>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Instance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParticipationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.CompositionStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="class" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="confidentiality" type="FHIR.ConfidentialityClassification"/>
        <ns4:element name="attester">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Attester"/>
        </ns4:element>
        <ns4:element name="custodian" type="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.RelatesTo"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Event"/>
        </ns4:element>
        <ns4:element name="section">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Section"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Snapshot" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation.DateCriterion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="value" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Endpoint" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.EndpointStatus"/>
        <ns4:element name="connectionType" type="FHIR.Coding"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="payloadType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="payloadMimeType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="address" type="FHIR.uri"/>
        <ns4:element name="header">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="kind" type="FHIR.CapabilityStatementKind"/>
        <ns4:element name="instantiates">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="software" type="FHIR.CapabilityStatement.Software"/>
        <ns4:element name="implementation" type="FHIR.CapabilityStatement.Implementation"/>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="acceptUnknown" type="FHIR.UnknownContentCode"/>
        <ns4:element name="format">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="patchFormat">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="implementationGuide">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="profile">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="rest">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest"/>
        </ns4:element>
        <ns4:element name="messaging">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Messaging"/>
        </ns4:element>
        <ns4:element name="document">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Document"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Agent1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="role">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="stratum">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Stratum"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMapGroupUnmappedMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="instant" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Communication.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.uri"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="answer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Answer"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contributor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contributor"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="kind" type="FHIR.ResourceType"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.Participant"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="dosage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="transform" type="FHIR.Reference"/>
        <ns4:element name="dynamicValue">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.DynamicValue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionOperatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionPrescription.Dispense" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="product" type="FHIR.CodeableConcept"/>
        <ns4:element name="eye" type="FHIR.VisionEyes"/>
        <ns4:element name="sphere" type="FHIR.decimal"/>
        <ns4:element name="cylinder" type="FHIR.decimal"/>
        <ns4:element name="axis" type="FHIR.integer"/>
        <ns4:element name="prism" type="FHIR.decimal"/>
        <ns4:element name="base" type="FHIR.VisionBase"/>
        <ns4:element name="add" type="FHIR.decimal"/>
        <ns4:element name="power" type="FHIR.decimal"/>
        <ns4:element name="backCurve" type="FHIR.decimal"/>
        <ns4:element name="diameter" type="FHIR.decimal"/>
        <ns4:element name="duration" type="FHIR.Quantity"/>
        <ns4:element name="color" type="FHIR.string"/>
        <ns4:element name="brand" type="FHIR.string"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DaysOfWeek" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IssueType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Rest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.RestfulCapabilityMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="security" type="FHIR.CapabilityStatement.Security"/>
        <ns4:element name="resource">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Resource"/>
        </ns4:element>
        <ns4:element name="interaction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Interaction1"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SearchParam"/>
        </ns4:element>
        <ns4:element name="operation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Operation"/>
        </ns4:element>
        <ns4:element name="compartment">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="base" type="FHIR.Reference"/>
        <ns4:element name="parent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="event" type="FHIR.Coding"/>
        <ns4:element name="category" type="FHIR.MessageSignificanceCategory"/>
        <ns4:element name="focus">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.Focus"/>
        </ns4:element>
        <ns4:element name="responseRequired" type="FHIR.boolean"/>
        <ns4:element name="allowedResponse">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.AllowedResponse"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="number" type="FHIR.unsignedInt"/>
        <ns4:element name="sopClass" type="FHIR.oid"/>
        <ns4:element name="title" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapContextType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="reference" type="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyHistoryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Rule3" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="ruleId" type="FHIR.id"/>
        <ns4:element name="param">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Param3"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Rule2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="ruleId" type="FHIR.id"/>
        <ns4:element name="param">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Param2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="positiveInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="immutable" type="FHIR.boolean"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="extensible" type="FHIR.boolean"/>
        <ns4:element name="compose" type="FHIR.ValueSet.Compose"/>
        <ns4:element name="expansion" type="FHIR.ValueSet.Expansion"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Compartment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CompartmentType"/>
        <ns4:element name="rule" type="FHIR.GraphCompartmentRule"/>
        <ns4:element name="expression" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.id"/>
        <ns4:element name="type" type="FHIR.string"/>
        <ns4:element name="mode" type="FHIR.StructureMapInputMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Origin" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" type="FHIR.integer"/>
        <ns4:element name="profile" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Rule1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="ruleId" type="FHIR.id"/>
        <ns4:element name="param">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Param1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Linkage" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Linkage.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Signature" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="when" type="FHIR.instant"/>
        <ns4:element name="who">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="onBehalfOf">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="blob" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpressionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionResponseTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="event">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="facilityType" type="FHIR.CodeableConcept"/>
        <ns4:element name="practiceSetting" type="FHIR.CodeableConcept"/>
        <ns4:element name="sourcePatientInfo" type="FHIR.Reference"/>
        <ns4:element name="related">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.Related"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contributor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contributor"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="disclaimer" type="FHIR.markdown"/>
        <ns4:element name="scoring" type="FHIR.CodeableConcept"/>
        <ns4:element name="compositeScoring" type="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="riskAdjustment" type="FHIR.string"/>
        <ns4:element name="rateAggregation" type="FHIR.string"/>
        <ns4:element name="rationale" type="FHIR.markdown"/>
        <ns4:element name="clinicalRecommendationStatement" type="FHIR.markdown"/>
        <ns4:element name="improvementNotation" type="FHIR.string"/>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.markdown"/>
        </ns4:element>
        <ns4:element name="guidance" type="FHIR.markdown"/>
        <ns4:element name="set" type="FHIR.string"/>
        <ns4:element name="group">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group"/>
        </ns4:element>
        <ns4:element name="supplementalData">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.SupplementalData"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationOutcome" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="issue">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationOutcome.Issue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Practitioner.Qualification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="issuer" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Signer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="party" type="FHIR.Reference"/>
        <ns4:element name="signature">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcessResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="processNote">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProcessResponse.ProcessNote"/>
        </ns4:element>
        <ns4:element name="error">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="communicationRequest">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Explanation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonNotGiven">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Narrative" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="status" type="FHIR.NarrativeStatus"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition.Focus" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.ResourceType"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
        <ns4:element name="min" type="FHIR.unsignedInt"/>
        <ns4:element name="max" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NarrativeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CommunicationRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Friendly" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="count" type="FHIR.integer"/>
        <ns4:element name="patients" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition.AllowedResponse" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="message" type="FHIR.Reference"/>
        <ns4:element name="situation" type="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasmntPrinciple" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConsentExceptType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="capacity" type="FHIR.Quantity"/>
        <ns4:element name="specimenQuantity" type="FHIR.Quantity"/>
        <ns4:element name="additive">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="string" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Security" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="cors" type="FHIR.boolean"/>
        <ns4:element name="service">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="certificate">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Certificate"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionRequiredBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EndpointStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidePageKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Data1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="meaning" type="FHIR.ConsentDataMeaning"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Example" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuideDependencyType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Element" retrievable="false" baseType="System.Any">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ExplanationOfBenefitStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="billablePeriod" type="FHIR.Period"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="referral" type="FHIR.Reference"/>
        <ns4:element name="facility" type="FHIR.Reference"/>
        <ns4:element name="claim" type="FHIR.Reference"/>
        <ns4:element name="claimResponse" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="related">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Related"/>
        </ns4:element>
        <ns4:element name="prescription" type="FHIR.Reference"/>
        <ns4:element name="originalPrescription" type="FHIR.Reference"/>
        <ns4:element name="payee" type="FHIR.ExplanationOfBenefit.Payee"/>
        <ns4:element name="information">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Information"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.CareTeam"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Procedure"/>
        </ns4:element>
        <ns4:element name="precedence" type="FHIR.positiveInt"/>
        <ns4:element name="insurance" type="FHIR.ExplanationOfBenefit.Insurance"/>
        <ns4:element name="accident" type="FHIR.ExplanationOfBenefit.Accident"/>
        <ns4:element name="employmentImpacted" type="FHIR.Period"/>
        <ns4:element name="hospitalization" type="FHIR.Period"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.AddItem"/>
        </ns4:element>
        <ns4:element name="totalCost" type="FHIR.Money"/>
        <ns4:element name="unallocDeductable" type="FHIR.Money"/>
        <ns4:element name="totalBenefit" type="FHIR.Money"/>
        <ns4:element name="payment" type="FHIR.ExplanationOfBenefit.Payment"/>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="processNote">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.ProcessNote"/>
        </ns4:element>
        <ns4:element name="benefitBalance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.BenefitBalance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceVersionPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingManifest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="authoringTime" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="study">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingManifest.Study"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="dateTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Messaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Endpoint"/>
        </ns4:element>
        <ns4:element name="reliableCache" type="FHIR.unsignedInt"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="supportedMessage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SupportedMessage"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Event"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministrationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="caseSensitive" type="FHIR.boolean"/>
        <ns4:element name="valueSet" type="FHIR.uri"/>
        <ns4:element name="hierarchyMeaning" type="FHIR.CodeSystemHierarchyMeaning"/>
        <ns4:element name="compositional" type="FHIR.boolean"/>
        <ns4:element name="versionNeeded" type="FHIR.boolean"/>
        <ns4:element name="content" type="FHIR.CodeSystemContentMode"/>
        <ns4:element name="count" type="FHIR.unsignedInt"/>
        <ns4:element name="filter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Filter"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Property"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account.Guarantor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="party" type="FHIR.Reference"/>
        <ns4:element name="onHold" type="FHIR.boolean"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Location" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.EncounterLocationStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Policy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authority" type="FHIR.uri"/>
        <ns4:element name="uri" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionCardinalityBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="careTeamLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="List.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="flag" type="FHIR.CodeableConcept"/>
        <ns4:element name="deleted" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="item" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationship">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" type="FHIR.Address"/>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Financial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.SupportedMessage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.EventCapabilityMode"/>
        <ns4:element name="definition" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.CarePlanStatus"/>
        <ns4:element name="intent" type="FHIR.CarePlanIntent"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="author">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="addresses">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="activity">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CarePlan.Activity"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Subscription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="status" type="FHIR.SubscriptionStatus"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="reason" type="FHIR.string"/>
        <ns4:element name="criteria" type="FHIR.string"/>
        <ns4:element name="error" type="FHIR.string"/>
        <ns4:element name="channel" type="FHIR.Subscription.Channel"/>
        <ns4:element name="tag">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Person" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="address">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo" type="FHIR.Attachment"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Person.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Duration" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="subjectType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Link"/>
        </ns4:element>
        <ns4:element name="fullUrl" type="FHIR.uri"/>
        <ns4:element name="resource" type="FHIR.ResourceContainer"/>
        <ns4:element name="search" type="FHIR.Bundle.Search"/>
        <ns4:element name="request" type="FHIR.Bundle.Request"/>
        <ns4:element name="response" type="FHIR.Bundle.Response"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="deceased">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="address">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="maritalStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="multipleBirth">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Contact"/>
        </ns4:element>
        <ns4:element name="animal" type="FHIR.Patient.Animal"/>
        <ns4:element name="communication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Communication"/>
        </ns4:element>
        <ns4:element name="generalPractitioner">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystemIdentifierType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="List" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ListStatus"/>
        <ns4:element name="mode" type="FHIR.ListMode"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="orderedBy" type="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.List.Entry"/>
        </ns4:element>
        <ns4:element name="emptyReason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Overload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="parameterName">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Stratum" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="population">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Population1"/>
        </ns4:element>
        <ns4:element name="measureScore" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedPerson" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="name">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="address">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AccountStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" type="FHIR.Reference"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="rank" type="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispenseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyMemberHistory.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="onset">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingManifest.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingManifest.Instance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.RequestStatus"/>
        <ns4:element name="intent" type="FHIR.RequestIntent"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="kind" type="FHIR.NamingSystemType"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="responsible" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="uniqueId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NamingSystem.UniqueId"/>
        </ns4:element>
        <ns4:element name="replacedBy" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="start" type="FHIR.ResourceType"/>
        <ns4:element name="profile" type="FHIR.uri"/>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConfidentialityClassification" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntolerance.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" type="FHIR.CodeableConcept"/>
        <ns4:element name="manifestation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="onset" type="FHIR.dateTime"/>
        <ns4:element name="severity" type="FHIR.AllergyIntoleranceSeverity"/>
        <ns4:element name="exposureRoute" type="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Texture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" type="FHIR.CodeableConcept"/>
        <ns4:element name="foodType" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IdentifierUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Sequence.Repository" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.repositoryType"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="datasetId" type="FHIR.string"/>
        <ns4:element name="variantsetId" type="FHIR.string"/>
        <ns4:element name="readsetId" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DigitalMediaType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapTargetListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceRequest" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priorRequest">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.RequestStatus"/>
        <ns4:element name="intent" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.DeviceRequest.Requester"/>
        <ns4:element name="performerType" type="FHIR.CodeableConcept"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.ProvenanceEntityRole"/>
        <ns4:element name="what">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Agent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Detail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="masterIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="docStatus" type="FHIR.CompositionStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="class" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="indexed" type="FHIR.instant"/>
        <ns4:element name="author">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authenticator" type="FHIR.Reference"/>
        <ns4:element name="custodian" type="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.RelatesTo"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.Content"/>
        </ns4:element>
        <ns4:element name="context" type="FHIR.DocumentReference.Context"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Address" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.AddressUse"/>
        <ns4:element name="type" type="FHIR.AddressType"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="line">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="city" type="FHIR.string"/>
        <ns4:element name="district" type="FHIR.string"/>
        <ns4:element name="state" type="FHIR.string"/>
        <ns4:element name="postalCode" type="FHIR.string"/>
        <ns4:element name="country" type="FHIR.string"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Goal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="start" type="FHIR.CodeableConcept"/>
        <ns4:element name="addresses">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeableConcept" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="coding">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="role">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage.Grouping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="group" type="FHIR.string"/>
        <ns4:element name="groupDisplay" type="FHIR.string"/>
        <ns4:element name="subGroup" type="FHIR.string"/>
        <ns4:element name="subGroupDisplay" type="FHIR.string"/>
        <ns4:element name="plan" type="FHIR.string"/>
        <ns4:element name="planDisplay" type="FHIR.string"/>
        <ns4:element name="subPlan" type="FHIR.string"/>
        <ns4:element name="subPlanDisplay" type="FHIR.string"/>
        <ns4:element name="class" type="FHIR.string"/>
        <ns4:element name="classDisplay" type="FHIR.string"/>
        <ns4:element name="subClass" type="FHIR.string"/>
        <ns4:element name="subClassDisplay" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BindingStrength" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Money" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BodySite" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="qualifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="image">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItem.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Population1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="count" type="FHIR.integer"/>
        <ns4:element name="patients" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEvent" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="category" type="FHIR.AdverseEventCategory"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="reaction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="seriousness" type="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="recorder" type="FHIR.Reference"/>
        <ns4:element name="eventParticipant" type="FHIR.Reference"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="suspectEntity">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AdverseEvent.SuspectEntity"/>
        </ns4:element>
        <ns4:element name="subjectMedicalHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referenceDocument">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="study">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" type="FHIR.ActionConditionKind"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Appointment.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="required" type="FHIR.ParticipantRequired"/>
        <ns4:element name="status" type="FHIR.ParticipationStatus"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.uri"/>
        <ns4:element name="timestamp" type="FHIR.dateTime"/>
        <ns4:element name="total" type="FHIR.integer"/>
        <ns4:element name="offset" type="FHIR.integer"/>
        <ns4:element name="parameter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Parameter"/>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Contains"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="source">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="group">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Practitioner" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="photo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="qualification">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Practitioner.Qualification"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEvent.SuspectEntity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="instance" type="FHIR.Reference"/>
        <ns4:element name="causality" type="FHIR.AdverseEventCausality"/>
        <ns4:element name="causalityAssessment" type="FHIR.CodeableConcept"/>
        <ns4:element name="causalityProductRelatedness" type="FHIR.string"/>
        <ns4:element name="causalityMethod" type="FHIR.CodeableConcept"/>
        <ns4:element name="causalityAuthor" type="FHIR.Reference"/>
        <ns4:element name="causalityResult" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParticipantRequired" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiscriminatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.ClassHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="class" type="FHIR.Coding"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Reference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="reference" type="FHIR.string"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="display" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="XPathUsageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionPrescription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="dateWritten" type="FHIR.dateTime"/>
        <ns4:element name="prescriber" type="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dispense">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VisionPrescription.Dispense"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParameter.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="definition" type="FHIR.Reference"/>
        <ns4:element name="expression" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapInputMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InstanceAvailability" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="id" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="individual" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="event" type="FHIR.Coding"/>
        <ns4:element name="destination">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageHeader.Destination"/>
        </ns4:element>
        <ns4:element name="receiver" type="FHIR.Reference"/>
        <ns4:element name="sender" type="FHIR.Reference"/>
        <ns4:element name="timestamp" type="FHIR.instant"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="source" type="FHIR.MessageHeader.Source"/>
        <ns4:element name="responsible" type="FHIR.Reference"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="response" type="FHIR.MessageHeader.Response"/>
        <ns4:element name="focus">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LinkageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferenceHandlingPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" type="FHIR.Money"/>
        <ns4:element name="adjustmentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ObservationRelationshipType"/>
        <ns4:element name="target" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.Udi" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="deviceIdentifier" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="jurisdiction" type="FHIR.uri"/>
        <ns4:element name="carrierHRF" type="FHIR.string"/>
        <ns4:element name="carrierAIDC" type="FHIR.base64Binary"/>
        <ns4:element name="issuer" type="FHIR.uri"/>
        <ns4:element name="entryType" type="FHIR.UDIEntryType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Administration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" type="FHIR.Timing"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="rate">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Contains" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="abstract" type="FHIR.boolean"/>
        <ns4:element name="inactive" type="FHIR.boolean"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Designation"/>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Contains"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponse.Financial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FilterOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentNotice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="statusDate" type="FHIR.date"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="paymentStatus" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Detail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Range" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="low" type="FHIR.Quantity"/>
        <ns4:element name="high" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Practitioner" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudyStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExtensionContext" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRDefinedType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Page" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" type="FHIR.uri"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="kind" type="FHIR.GuidePageKind"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="package">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="format" type="FHIR.code"/>
        <ns4:element name="page">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Page"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="population">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Population"/>
        </ns4:element>
        <ns4:element name="measureScore" type="FHIR.decimal"/>
        <ns4:element name="stratifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Compose" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lockedDate" type="FHIR.date"/>
        <ns4:element name="inactive" type="FHIR.boolean"/>
        <ns4:element name="include">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Include"/>
        </ns4:element>
        <ns4:element name="exclude">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Include"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDelivery.SuppliedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcedureRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConstraintSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DomainResource" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="text" type="FHIR.Narrative"/>
        <ns4:element name="contained">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceContainer"/>
        </ns4:element>
        <ns4:element name="extension">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
        <ns4:element name="modifierExtension">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntolerance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" type="FHIR.AllergyIntoleranceClinicalStatus"/>
        <ns4:element name="verificationStatus" type="FHIR.AllergyIntoleranceVerificationStatus"/>
        <ns4:element name="type" type="FHIR.AllergyIntoleranceType"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntoleranceCategory"/>
        </ns4:element>
        <ns4:element name="criticality" type="FHIR.AllergyIntoleranceCriticality"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="assertedDate" type="FHIR.dateTime"/>
        <ns4:element name="recorder" type="FHIR.Reference"/>
        <ns4:element name="asserter" type="FHIR.Reference"/>
        <ns4:element name="lastOccurrence" type="FHIR.dateTime"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reaction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntolerance.Reaction"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.EncounterStatus"/>
        <ns4:element name="statusHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.StatusHistory"/>
        </ns4:element>
        <ns4:element name="class" type="FHIR.Coding"/>
        <ns4:element name="classHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.ClassHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="episodeOfCare">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="incomingReferral">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Participant"/>
        </ns4:element>
        <ns4:element name="appointment" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="length" type="FHIR.Duration"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Diagnosis"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="hospitalization" type="FHIR.Encounter.Hospitalization"/>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Location"/>
        </ns4:element>
        <ns4:element name="serviceProvider" type="FHIR.Reference"/>
        <ns4:element name="partOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure.FocalDevice" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" type="FHIR.CodeableConcept"/>
        <ns4:element name="manipulated" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="ref" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Dependent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.id"/>
        <ns4:element name="variable">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.ValuedItem1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="packageCode" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Interaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.TypeRestfulInteraction"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.id"/>
        <ns4:element name="extends" type="FHIR.id"/>
        <ns4:element name="typeMode" type="FHIR.StructureMapGroupTypeMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="input">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Input"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Rule"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContractResourceStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReport.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Timing" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="event">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.dateTime"/>
        </ns4:element>
        <ns4:element name="repeat" type="FHIR.Timing.Repeat"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="parent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="questionnaire" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.QuestionnaireResponseStatus"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="authored" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="userId" type="FHIR.Identifier"/>
        <ns4:element name="altId" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="requestor" type="FHIR.boolean"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="policy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="media" type="FHIR.Coding"/>
        <ns4:element name="network" type="FHIR.AuditEvent.Network"/>
        <ns4:element name="purposeOfUse">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Property1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="accession" type="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="availability" type="FHIR.InstanceAvailability"/>
        <ns4:element name="modalityList">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="started" type="FHIR.dateTime"/>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referrer" type="FHIR.Reference"/>
        <ns4:element name="interpreter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="numberOfSeries" type="FHIR.unsignedInt"/>
        <ns4:element name="numberOfInstances" type="FHIR.unsignedInt"/>
        <ns4:element name="procedureReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="procedureCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="series">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Series"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.AccountStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="active" type="FHIR.Period"/>
        <ns4:element name="balance" type="FHIR.Money"/>
        <ns4:element name="coverage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Coverage"/>
        </ns4:element>
        <ns4:element name="owner" type="FHIR.Reference"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="guarantor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Guarantor"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchSubjectStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Network" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="address" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.AuditEventAgentNetworkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPoint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" type="FHIR.ContactPointSystem"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="use" type="FHIR.ContactPointUse"/>
        <ns4:element name="rank" type="FHIR.positiveInt"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="wasSubstituted" type="FHIR.boolean"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="responsibleParty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Extension" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.BenefitBalance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="subCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="excluded" type="FHIR.boolean"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="network" type="FHIR.CodeableConcept"/>
        <ns4:element name="unit" type="FHIR.CodeableConcept"/>
        <ns4:element name="term" type="FHIR.CodeableConcept"/>
        <ns4:element name="financial">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Financial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="exclude" type="FHIR.boolean"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UDIEntryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Supplement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="productName" type="FHIR.string"/>
        <ns4:element name="schedule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="instruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="practitioner" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="healthcareService">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="availableTime">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" type="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.EnteralFormula" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="baseFormulaType" type="FHIR.CodeableConcept"/>
        <ns4:element name="baseFormulaProductName" type="FHIR.string"/>
        <ns4:element name="additiveType" type="FHIR.CodeableConcept"/>
        <ns4:element name="additiveProductName" type="FHIR.string"/>
        <ns4:element name="caloricDensity" type="FHIR.Quantity"/>
        <ns4:element name="routeofAdministration" type="FHIR.CodeableConcept"/>
        <ns4:element name="administration">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Administration"/>
        </ns4:element>
        <ns4:element name="maxVolumeToDeliver" type="FHIR.Quantity"/>
        <ns4:element name="administrationInstruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Section" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.Narrative"/>
        <ns4:element name="mode" type="FHIR.ListMode"/>
        <ns4:element name="orderedBy" type="FHIR.CodeableConcept"/>
        <ns4:element name="entry">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="emptyReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="section">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Section"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="sliceName" type="FHIR.string"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportActionResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ActionParticipantType"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization" retrievable="true" primaryCodePath="vaccineCode" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ImmunizationStatusCodes"/>
        <ns4:element name="notGiven" type="FHIR.boolean"/>
        <ns4:element name="vaccineCode" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="primarySource" type="FHIR.boolean"/>
        <ns4:element name="reportOrigin" type="FHIR.CodeableConcept"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="manufacturer" type="FHIR.Reference"/>
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="expirationDate" type="FHIR.date"/>
        <ns4:element name="site" type="FHIR.CodeableConcept"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseQuantity" type="FHIR.Quantity"/>
        <ns4:element name="practitioner">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Practitioner"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="explanation" type="FHIR.Immunization.Explanation"/>
        <ns4:element name="reaction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Reaction"/>
        </ns4:element>
        <ns4:element name="vaccinationProtocol">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.VaccinationProtocol"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" type="FHIR.Reference"/>
        <ns4:element name="collected">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapTransform" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Sequence.Quality" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.qualityType"/>
        <ns4:element name="standardSequence" type="FHIR.CodeableConcept"/>
        <ns4:element name="start" type="FHIR.integer"/>
        <ns4:element name="end" type="FHIR.integer"/>
        <ns4:element name="score" type="FHIR.Quantity"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="truthTP" type="FHIR.decimal"/>
        <ns4:element name="queryTP" type="FHIR.decimal"/>
        <ns4:element name="truthFN" type="FHIR.decimal"/>
        <ns4:element name="queryFP" type="FHIR.decimal"/>
        <ns4:element name="gtFP" type="FHIR.decimal"/>
        <ns4:element name="precision" type="FHIR.decimal"/>
        <ns4:element name="recall" type="FHIR.decimal"/>
        <ns4:element name="fScore" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResponseType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="decimal" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Request" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" type="FHIR.HTTPVerb"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="ifNoneMatch" type="FHIR.string"/>
        <ns4:element name="ifModifiedSince" type="FHIR.instant"/>
        <ns4:element name="ifMatch" type="FHIR.string"/>
        <ns4:element name="ifNoneExist" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AggregationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatementKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Person.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="assurance" type="FHIR.IdentityAssuranceLevel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="operator">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FilterOperator"/>
        </ns4:element>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="submitter" type="FHIR.Reference"/>
        <ns4:element name="payee" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="amount" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferralRequest" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.RequestStatus"/>
        <ns4:element name="intent" type="FHIR.RequestIntent"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="serviceRequested">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.ReferralRequest.Requester"/>
        <ns4:element name="specialty" type="FHIR.CodeableConcept"/>
        <ns4:element name="recipient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="supportingInfo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="definition" type="FHIR.Reference"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.CarePlanActivityStatus"/>
        <ns4:element name="statusReason" type="FHIR.string"/>
        <ns4:element name="prohibited" type="FHIR.boolean"/>
        <ns4:element name="scheduled">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dailyAmount" type="FHIR.Quantity"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation.Protocol" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doseSequence" type="FHIR.positiveInt"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="authority" type="FHIR.Reference"/>
        <ns4:element name="series" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceVerificationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventTiming" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition.Stage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="summary" type="FHIR.CodeableConcept"/>
        <ns4:element name="assessment">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="subtype">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="action" type="FHIR.AuditEventAction"/>
        <ns4:element name="recorded" type="FHIR.instant"/>
        <ns4:element name="outcome" type="FHIR.AuditEventOutcome"/>
        <ns4:element name="outcomeDesc" type="FHIR.string"/>
        <ns4:element name="purposeOfEvent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Agent"/>
        </ns4:element>
        <ns4:element name="source" type="FHIR.AuditEvent.Source"/>
        <ns4:element name="entity">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Entity"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="responsible" type="FHIR.boolean"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GoalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParamType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SystemRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.TaskStatus"/>
        <ns4:element name="statusReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="businessStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="intent" type="FHIR.RequestIntent"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="focus" type="FHIR.Reference"/>
        <ns4:element name="for" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="executionPeriod" type="FHIR.Period"/>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="lastModified" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.Task.Requester"/>
        <ns4:element name="performerType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="owner" type="FHIR.Reference"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="restriction" type="FHIR.Task.Restriction"/>
        <ns4:element name="input">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Input"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Output"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionGroupingBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="kind" type="FHIR.OperationKind"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="idempotent" type="FHIR.boolean"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="base" type="FHIR.Reference"/>
        <ns4:element name="resource">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="system" type="FHIR.boolean"/>
        <ns4:element name="type" type="FHIR.boolean"/>
        <ns4:element name="instance" type="FHIR.boolean"/>
        <ns4:element name="parameter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter"/>
        </ns4:element>
        <ns4:element name="overload">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Overload"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapModelMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TaskStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDelivery" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.SupplyDeliveryStatus"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="suppliedItem" type="FHIR.SupplyDelivery.SuppliedItem"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="supplier" type="FHIR.Reference"/>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" type="FHIR.TestReportActionResult"/>
        <ns4:element name="message" type="FHIR.markdown"/>
        <ns4:element name="detail" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEventCausality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" type="FHIR.id"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.string"/>
        <ns4:element name="defaultValue">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="element" type="FHIR.string"/>
        <ns4:element name="listMode" type="FHIR.StructureMapSourceListMode"/>
        <ns4:element name="variable" type="FHIR.id"/>
        <ns4:element name="condition" type="FHIR.string"/>
        <ns4:element name="check" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.TestReportStatus"/>
        <ns4:element name="testScript" type="FHIR.Reference"/>
        <ns4:element name="result" type="FHIR.TestReportResult"/>
        <ns4:element name="score" type="FHIR.decimal"/>
        <ns4:element name="tester" type="FHIR.string"/>
        <ns4:element name="issued" type="FHIR.dateTime"/>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Participant"/>
        </ns4:element>
        <ns4:element name="setup" type="FHIR.TestReport.Setup"/>
        <ns4:element name="test">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Test"/>
        </ns4:element>
        <ns4:element name="teardown" type="FHIR.TestReport.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" type="FHIR.uri"/>
        <ns4:element name="sourceVersion" type="FHIR.string"/>
        <ns4:element name="target" type="FHIR.uri"/>
        <ns4:element name="targetVersion" type="FHIR.string"/>
        <ns4:element name="element">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Element"/>
        </ns4:element>
        <ns4:element name="unmapped" type="FHIR.ConceptMap.Unmapped"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="role" type="FHIR.Coding"/>
        <ns4:element name="lifecycle" type="FHIR.Coding"/>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="query" type="FHIR.base64Binary"/>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Sequence" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="coordinateSystem" type="FHIR.integer"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="specimen" type="FHIR.Reference"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="referenceSeq" type="FHIR.Sequence.ReferenceSeq"/>
        <ns4:element name="variant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Sequence.Variant"/>
        </ns4:element>
        <ns4:element name="observedSeq" type="FHIR.string"/>
        <ns4:element name="quality">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Sequence.Quality"/>
        </ns4:element>
        <ns4:element name="readCoverage" type="FHIR.integer"/>
        <ns4:element name="repository">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Sequence.Repository"/>
        </ns4:element>
        <ns4:element name="pointer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" type="FHIR.boolean"/>
        <ns4:element name="availableStartTime" type="FHIR.time"/>
        <ns4:element name="availableEndTime" type="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingManifest.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sopClass" type="FHIR.oid"/>
        <ns4:element name="uid" type="FHIR.oid"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubscriptionChannelType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.PropertyType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="serviced">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="facility" type="FHIR.Reference"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="businessArrangement" type="FHIR.string"/>
        <ns4:element name="benefitCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="benefitSubCategory" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphCompartmentRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParameterDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.code"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" type="FHIR.Money"/>
        <ns4:element name="adjustmentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchSubject" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.ResearchSubjectStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="study" type="FHIR.Reference"/>
        <ns4:element name="individual" type="FHIR.Reference"/>
        <ns4:element name="assignedArm" type="FHIR.string"/>
        <ns4:element name="actualArm" type="FHIR.string"/>
        <ns4:element name="consent" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" type="FHIR.TestReportActionResult"/>
        <ns4:element name="message" type="FHIR.markdown"/>
        <ns4:element name="detail" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Parameters.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="resource" type="FHIR.ResourceContainer"/>
        <ns4:element name="part">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Parameters.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="resourceType" type="FHIR.Coding"/>
        <ns4:element name="party" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement.DateFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Sequence.Variant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" type="FHIR.integer"/>
        <ns4:element name="end" type="FHIR.integer"/>
        <ns4:element name="observedAllele" type="FHIR.string"/>
        <ns4:element name="referenceAllele" type="FHIR.string"/>
        <ns4:element name="cigar" type="FHIR.string"/>
        <ns4:element name="variantPointer" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.MedicationDispenseStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationDispense.Performer"/>
        </ns4:element>
        <ns4:element name="authorizingPrescription">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="daysSupply" type="FHIR.Quantity"/>
        <ns4:element name="whenPrepared" type="FHIR.dateTime"/>
        <ns4:element name="whenHandedOver" type="FHIR.dateTime"/>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="substitution" type="FHIR.MedicationDispense.Substitution"/>
        <ns4:element name="detectedIssue">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="notDone" type="FHIR.boolean"/>
        <ns4:element name="notDoneReason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FHIRSubstanceStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="instance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Instance"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Ingredient"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Legal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Processing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="procedure" type="FHIR.CodeableConcept"/>
        <ns4:element name="additive">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="time">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resource" type="FHIR.Reference"/>
        <ns4:element name="param">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Param"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="attachment" type="FHIR.Attachment"/>
        <ns4:element name="format" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Linkage.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.LinkageType"/>
        <ns4:element name="resource" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.uri"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="prefix" type="FHIR.string"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.QuestionnaireItemType"/>
        <ns4:element name="enableWhen">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.EnableWhen"/>
        </ns4:element>
        <ns4:element name="required" type="FHIR.boolean"/>
        <ns4:element name="repeats" type="FHIR.boolean"/>
        <ns4:element name="readOnly" type="FHIR.boolean"/>
        <ns4:element name="maxLength" type="FHIR.integer"/>
        <ns4:element name="options" type="FHIR.Reference"/>
        <ns4:element name="option">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Option"/>
        </ns4:element>
        <ns4:element name="initial">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="equivalence" type="FHIR.ConceptMapEquivalence"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="dependsOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.DependsOn"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.DependsOn"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.Coding"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionDirectionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation.Recommendation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="vaccineCode" type="FHIR.CodeableConcept"/>
        <ns4:element name="targetDisease" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseNumber" type="FHIR.positiveInt"/>
        <ns4:element name="forecastStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="dateCriterion">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.DateCriterion"/>
        </ns4:element>
        <ns4:element name="protocol" type="FHIR.ImmunizationRecommendation.Protocol"/>
        <ns4:element name="supportingImmunization">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingPatientInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AppointmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="appointment" type="FHIR.Reference"/>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="participantType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="participantStatus" type="FHIR.ParticipationStatus"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SlicingRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TriggerDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="FHIR.TriggerType"/>
        <ns4:element name="eventName" type="FHIR.string"/>
        <ns4:element name="eventTiming">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="eventData" type="FHIR.DataRequirement"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Interaction1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.SystemRestfulInteraction"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="preAuthRef">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferralRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Communication" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.EventStatus"/>
        <ns4:element name="notDone" type="FHIR.boolean"/>
        <ns4:element name="notDoneReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="medium">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="recipient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="sent" type="FHIR.dateTime"/>
        <ns4:element name="received" type="FHIR.dateTime"/>
        <ns4:element name="sender" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="payload">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Communication.Payload"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Term" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="issued" type="FHIR.dateTime"/>
        <ns4:element name="applies" type="FHIR.Period"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType" type="FHIR.CodeableConcept"/>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actionReason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Agent1"/>
        </ns4:element>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="valuedItem">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.ValuedItem1"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefitStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Animal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="species" type="FHIR.CodeableConcept"/>
        <ns4:element name="breed" type="FHIR.CodeableConcept"/>
        <ns4:element name="genderStatus" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="expiry" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Library" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contributor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contributor"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="parameter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ParameterDefinition"/>
        </ns4:element>
        <ns4:element name="dataRequirement">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.DispenseRequest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="validityPeriod" type="FHIR.Period"/>
        <ns4:element name="numberOfRepeatsAllowed" type="FHIR.positiveInt"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="expectedSupplyDuration" type="FHIR.Duration"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.EncounterStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Information" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="reason" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequest.OrderedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConsentState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEventCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" type="FHIR.Reference"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="rank" type="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LinkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Package" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="resource">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Resource"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceCriticality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.ConsentState"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="dateTime" type="FHIR.dateTime"/>
        <ns4:element name="consentingParty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="actor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Actor"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="organization">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="policy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Policy"/>
        </ns4:element>
        <ns4:element name="policyRule" type="FHIR.uri"/>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="purpose">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="dataPeriod" type="FHIR.Period"/>
        <ns4:element name="data">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Data"/>
        </ns4:element>
        <ns4:element name="except">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Except"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMapEquivalence" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.MedicationRequestStatus"/>
        <ns4:element name="intent" type="FHIR.MedicationRequestIntent"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.MedicationRequestPriority"/>
        <ns4:element name="medication">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.MedicationRequest.Requester"/>
        <ns4:element name="recorder" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="dispenseRequest" type="FHIR.MedicationRequest.DispenseRequest"/>
        <ns4:element name="substitution" type="FHIR.MedicationRequest.Substitution"/>
        <ns4:element name="priorPrescription" type="FHIR.Reference"/>
        <ns4:element name="detectedIssue">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRAllTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="recommendation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.Recommendation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PropertyRepresentation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventAction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetric.Calibration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.DeviceMetricCalibrationType"/>
        <ns4:element name="state" type="FHIR.DeviceMetricCalibrationState"/>
        <ns4:element name="time" type="FHIR.instant"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Detail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TriggerType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Information" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentManifest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="masterIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="recipient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source" type="FHIR.uri"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentManifest.Content"/>
        </ns4:element>
        <ns4:element name="related">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentManifest.Related"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ObservationStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="issued" type="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation" type="FHIR.CodeableConcept"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="specimen" type="FHIR.Reference"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="referenceRange">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.ReferenceRange"/>
        </ns4:element>
        <ns4:element name="related">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.Related"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchModifierCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompositionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Unmapped" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.ConceptMapGroupUnmappedMode"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Annotation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="author">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="time" type="FHIR.dateTime"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AppointmentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageSignificanceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationParameterUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Include" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="concept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Concept"/>
        </ns4:element>
        <ns4:element name="filter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Filter"/>
        </ns4:element>
        <ns4:element name="valueSet">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceComponent" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="lastSystemChange" type="FHIR.instant"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="parent" type="FHIR.Reference"/>
        <ns4:element name="operationalStatus">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="parameterGroup" type="FHIR.CodeableConcept"/>
        <ns4:element name="measurementPrinciple" type="FHIR.MeasmntPrinciple"/>
        <ns4:element name="productionSpecification">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceComponent.ProductionSpecification"/>
        </ns4:element>
        <ns4:element name="languageCode" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionConditionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Meta" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="versionId" type="FHIR.id"/>
        <ns4:element name="lastUpdated" type="FHIR.instant"/>
        <ns4:element name="profile">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="security">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="tag">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="qualityType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdministrativeGender" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReport.Image" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="link" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Slot" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="serviceCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="serviceType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" type="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.SlotStatus"/>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="overbooked" type="FHIR.boolean"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contributor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="FHIR.ContributorType"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Designation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EnrollmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcessResponse.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation.ReferenceRange" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="low" type="FHIR.Quantity"/>
        <ns4:element name="high" type="FHIR.Quantity"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="appliesTo">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="age" type="FHIR.Range"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="policyHolder" type="FHIR.Reference"/>
        <ns4:element name="subscriber" type="FHIR.Reference"/>
        <ns4:element name="subscriberId" type="FHIR.string"/>
        <ns4:element name="beneficiary" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="payor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="grouping" type="FHIR.Coverage.Grouping"/>
        <ns4:element name="dependent" type="FHIR.string"/>
        <ns4:element name="sequence" type="FHIR.string"/>
        <ns4:element name="order" type="FHIR.positiveInt"/>
        <ns4:element name="network" type="FHIR.string"/>
        <ns4:element name="contract">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentDefinition.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.ResourceType"/>
        <ns4:element name="param">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceContainer" retrievable="false" baseType="System.Any">
        <ns4:element name="Account" type="FHIR.Account"/>
        <ns4:element name="ActivityDefinition" type="FHIR.ActivityDefinition"/>
        <ns4:element name="AdverseEvent" type="FHIR.AdverseEvent"/>
        <ns4:element name="AllergyIntolerance" type="FHIR.AllergyIntolerance"/>
        <ns4:element name="Appointment" type="FHIR.Appointment"/>
        <ns4:element name="AppointmentResponse" type="FHIR.AppointmentResponse"/>
        <ns4:element name="AuditEvent" type="FHIR.AuditEvent"/>
        <ns4:element name="Basic" type="FHIR.Basic"/>
        <ns4:element name="Binary" type="FHIR.Binary"/>
        <ns4:element name="BodySite" type="FHIR.BodySite"/>
        <ns4:element name="Bundle" type="FHIR.Bundle"/>
        <ns4:element name="CapabilityStatement" type="FHIR.CapabilityStatement"/>
        <ns4:element name="CarePlan" type="FHIR.CarePlan"/>
        <ns4:element name="CareTeam" type="FHIR.CareTeam"/>
        <ns4:element name="ChargeItem" type="FHIR.ChargeItem"/>
        <ns4:element name="Claim" type="FHIR.Claim"/>
        <ns4:element name="ClaimResponse" type="FHIR.ClaimResponse"/>
        <ns4:element name="ClinicalImpression" type="FHIR.ClinicalImpression"/>
        <ns4:element name="CodeSystem" type="FHIR.CodeSystem"/>
        <ns4:element name="Communication" type="FHIR.Communication"/>
        <ns4:element name="CommunicationRequest" type="FHIR.CommunicationRequest"/>
        <ns4:element name="CompartmentDefinition" type="FHIR.CompartmentDefinition"/>
        <ns4:element name="Composition" type="FHIR.Composition"/>
        <ns4:element name="ConceptMap" type="FHIR.ConceptMap"/>
        <ns4:element name="Condition" type="FHIR.Condition"/>
        <ns4:element name="Consent" type="FHIR.Consent"/>
        <ns4:element name="Contract" type="FHIR.Contract"/>
        <ns4:element name="Coverage" type="FHIR.Coverage"/>
        <ns4:element name="DataElement" type="FHIR.DataElement"/>
        <ns4:element name="DetectedIssue" type="FHIR.DetectedIssue"/>
        <ns4:element name="Device" type="FHIR.Device"/>
        <ns4:element name="DeviceComponent" type="FHIR.DeviceComponent"/>
        <ns4:element name="DeviceMetric" type="FHIR.DeviceMetric"/>
        <ns4:element name="DeviceRequest" type="FHIR.DeviceRequest"/>
        <ns4:element name="DeviceUseStatement" type="FHIR.DeviceUseStatement"/>
        <ns4:element name="DiagnosticReport" type="FHIR.DiagnosticReport"/>
        <ns4:element name="DocumentManifest" type="FHIR.DocumentManifest"/>
        <ns4:element name="DocumentReference" type="FHIR.DocumentReference"/>
        <ns4:element name="EligibilityRequest" type="FHIR.EligibilityRequest"/>
        <ns4:element name="EligibilityResponse" type="FHIR.EligibilityResponse"/>
        <ns4:element name="Encounter" type="FHIR.Encounter"/>
        <ns4:element name="Endpoint" type="FHIR.Endpoint"/>
        <ns4:element name="EnrollmentRequest" type="FHIR.EnrollmentRequest"/>
        <ns4:element name="EnrollmentResponse" type="FHIR.EnrollmentResponse"/>
        <ns4:element name="EpisodeOfCare" type="FHIR.EpisodeOfCare"/>
        <ns4:element name="ExpansionProfile" type="FHIR.ExpansionProfile"/>
        <ns4:element name="ExplanationOfBenefit" type="FHIR.ExplanationOfBenefit"/>
        <ns4:element name="FamilyMemberHistory" type="FHIR.FamilyMemberHistory"/>
        <ns4:element name="Flag" type="FHIR.Flag"/>
        <ns4:element name="Goal" type="FHIR.Goal"/>
        <ns4:element name="GraphDefinition" type="FHIR.GraphDefinition"/>
        <ns4:element name="Group" type="FHIR.Group"/>
        <ns4:element name="GuidanceResponse" type="FHIR.GuidanceResponse"/>
        <ns4:element name="HealthcareService" type="FHIR.HealthcareService"/>
        <ns4:element name="ImagingManifest" type="FHIR.ImagingManifest"/>
        <ns4:element name="ImagingStudy" type="FHIR.ImagingStudy"/>
        <ns4:element name="Immunization" type="FHIR.Immunization"/>
        <ns4:element name="ImmunizationRecommendation" type="FHIR.ImmunizationRecommendation"/>
        <ns4:element name="ImplementationGuide" type="FHIR.ImplementationGuide"/>
        <ns4:element name="Library" type="FHIR.Library"/>
        <ns4:element name="Linkage" type="FHIR.Linkage"/>
        <ns4:element name="List" type="FHIR.List"/>
        <ns4:element name="Location" type="FHIR.Location"/>
        <ns4:element name="Measure" type="FHIR.Measure"/>
        <ns4:element name="MeasureReport" type="FHIR.MeasureReport"/>
        <ns4:element name="Media" type="FHIR.Media"/>
        <ns4:element name="Medication" type="FHIR.Medication"/>
        <ns4:element name="MedicationAdministration" type="FHIR.MedicationAdministration"/>
        <ns4:element name="MedicationDispense" type="FHIR.MedicationDispense"/>
        <ns4:element name="MedicationRequest" type="FHIR.MedicationRequest"/>
        <ns4:element name="MedicationStatement" type="FHIR.MedicationStatement"/>
        <ns4:element name="MessageDefinition" type="FHIR.MessageDefinition"/>
        <ns4:element name="MessageHeader" type="FHIR.MessageHeader"/>
        <ns4:element name="NamingSystem" type="FHIR.NamingSystem"/>
        <ns4:element name="NutritionOrder" type="FHIR.NutritionOrder"/>
        <ns4:element name="Observation" type="FHIR.Observation"/>
        <ns4:element name="OperationDefinition" type="FHIR.OperationDefinition"/>
        <ns4:element name="OperationOutcome" type="FHIR.OperationOutcome"/>
        <ns4:element name="Organization" type="FHIR.Organization"/>
        <ns4:element name="Patient" type="FHIR.Patient"/>
        <ns4:element name="PaymentNotice" type="FHIR.PaymentNotice"/>
        <ns4:element name="PaymentReconciliation" type="FHIR.PaymentReconciliation"/>
        <ns4:element name="Person" type="FHIR.Person"/>
        <ns4:element name="PlanDefinition" type="FHIR.PlanDefinition"/>
        <ns4:element name="Practitioner" type="FHIR.Practitioner"/>
        <ns4:element name="PractitionerRole" type="FHIR.PractitionerRole"/>
        <ns4:element name="Procedure" type="FHIR.Procedure"/>
        <ns4:element name="ProcedureRequest" type="FHIR.ProcedureRequest"/>
        <ns4:element name="ProcessRequest" type="FHIR.ProcessRequest"/>
        <ns4:element name="ProcessResponse" type="FHIR.ProcessResponse"/>
        <ns4:element name="Provenance" type="FHIR.Provenance"/>
        <ns4:element name="Questionnaire" type="FHIR.Questionnaire"/>
        <ns4:element name="QuestionnaireResponse" type="FHIR.QuestionnaireResponse"/>
        <ns4:element name="ReferralRequest" type="FHIR.ReferralRequest"/>
        <ns4:element name="RelatedPerson" type="FHIR.RelatedPerson"/>
        <ns4:element name="RequestGroup" type="FHIR.RequestGroup"/>
        <ns4:element name="ResearchStudy" type="FHIR.ResearchStudy"/>
        <ns4:element name="ResearchSubject" type="FHIR.ResearchSubject"/>
        <ns4:element name="RiskAssessment" type="FHIR.RiskAssessment"/>
        <ns4:element name="Schedule" type="FHIR.Schedule"/>
        <ns4:element name="SearchParameter" type="FHIR.SearchParameter"/>
        <ns4:element name="Sequence" type="FHIR.Sequence"/>
        <ns4:element name="ServiceDefinition" type="FHIR.ServiceDefinition"/>
        <ns4:element name="Slot" type="FHIR.Slot"/>
        <ns4:element name="Specimen" type="FHIR.Specimen"/>
        <ns4:element name="StructureDefinition" type="FHIR.StructureDefinition"/>
        <ns4:element name="StructureMap" type="FHIR.StructureMap"/>
        <ns4:element name="Subscription" type="FHIR.Subscription"/>
        <ns4:element name="Substance" type="FHIR.Substance"/>
        <ns4:element name="SupplyDelivery" type="FHIR.SupplyDelivery"/>
        <ns4:element name="SupplyRequest" type="FHIR.SupplyRequest"/>
        <ns4:element name="Task" type="FHIR.Task"/>
        <ns4:element name="TestReport" type="FHIR.TestReport"/>
        <ns4:element name="TestScript" type="FHIR.TestScript"/>
        <ns4:element name="ValueSet" type="FHIR.ValueSet"/>
        <ns4:element name="VisionPrescription" type="FHIR.VisionPrescription"/>
        <ns4:element name="Parameters" type="FHIR.Parameters"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceComponent.ProductionSpecification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="specType" type="FHIR.CodeableConcept"/>
        <ns4:element name="componentId" type="FHIR.Identifier"/>
        <ns4:element name="productionSpec" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="focal" type="FHIR.boolean"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="businessArrangement" type="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="claimResponse" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireItemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Timing.Repeat" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="bounds">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="count" type="FHIR.integer"/>
        <ns4:element name="countMax" type="FHIR.integer"/>
        <ns4:element name="duration" type="FHIR.decimal"/>
        <ns4:element name="durationMax" type="FHIR.decimal"/>
        <ns4:element name="durationUnit" type="FHIR.UnitsOfTime"/>
        <ns4:element name="frequency" type="FHIR.integer"/>
        <ns4:element name="frequencyMax" type="FHIR.integer"/>
        <ns4:element name="period" type="FHIR.decimal"/>
        <ns4:element name="periodMax" type="FHIR.decimal"/>
        <ns4:element name="periodUnit" type="FHIR.UnitsOfTime"/>
        <ns4:element name="dayOfWeek">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="timeOfDay">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.time"/>
        </ns4:element>
        <ns4:element name="when">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EventTiming"/>
        </ns4:element>
        <ns4:element name="offset" type="FHIR.unsignedInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="isActive" type="FHIR.boolean"/>
        <ns4:element name="amount" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Media" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.DigitalMediaType"/>
        <ns4:element name="subtype" type="FHIR.CodeableConcept"/>
        <ns4:element name="view" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="operator" type="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="height" type="FHIR.positiveInt"/>
        <ns4:element name="width" type="FHIR.positiveInt"/>
        <ns4:element name="frames" type="FHIR.positiveInt"/>
        <ns4:element name="duration" type="FHIR.unsignedInt"/>
        <ns4:element name="content" type="FHIR.Attachment"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="boolean" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapGroupTypeMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.ContractResourceStatusCodes"/>
        <ns4:element name="issued" type="FHIR.dateTime"/>
        <ns4:element name="applies" type="FHIR.Period"/>
        <ns4:element name="subject">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authority">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="domain">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actionReason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="decisionType" type="FHIR.CodeableConcept"/>
        <ns4:element name="contentDerivative" type="FHIR.CodeableConcept"/>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Agent"/>
        </ns4:element>
        <ns4:element name="signer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Signer"/>
        </ns4:element>
        <ns4:element name="valuedItem">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.ValuedItem"/>
        </ns4:element>
        <ns4:element name="term">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term"/>
        </ns4:element>
        <ns4:element name="binding">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="friendly">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Friendly"/>
        </ns4:element>
        <ns4:element name="legal">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Legal"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Rule"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Location.Position" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="longitude" type="FHIR.decimal"/>
        <ns4:element name="latitude" type="FHIR.decimal"/>
        <ns4:element name="altitude" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCalibrationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReport" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.DiagnosticReportStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="issued" type="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DiagnosticReport.Performer"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="result">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="imagingStudy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="image">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DiagnosticReport.Image"/>
        </ns4:element>
        <ns4:element name="conclusion" type="FHIR.string"/>
        <ns4:element name="codedDiagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="presentedForm">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="detail" type="FHIR.Reference"/>
        <ns4:element name="reported" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="site" type="FHIR.string"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" type="FHIR.uri"/>
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.string"/>
        <ns4:element name="display" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CompartmentType"/>
        <ns4:element name="search" type="FHIR.boolean"/>
        <ns4:element name="resource">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CompartmentDefinition.Resource"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="code" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Metadata" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Link"/>
        </ns4:element>
        <ns4:element name="capability">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Capability"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Binary" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="securityContext" type="FHIR.Reference"/>
        <ns4:element name="content" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression.Investigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionSelectionBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EncounterLocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDeliveryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Schedule" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="serviceCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="serviceType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="planningHorizon" type="FHIR.Period"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Structure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="mode" type="FHIR.StructureMapModelMode"/>
        <ns4:element name="alias" type="FHIR.string"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Output" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedArtifact" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="FHIR.RelatedArtifactType"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="citation" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="document" type="FHIR.Attachment"/>
        <ns4:element name="resource" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.MedicationAdministrationStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="effective">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationAdministration.Performer"/>
        </ns4:element>
        <ns4:element name="notGiven" type="FHIR.boolean"/>
        <ns4:element name="reasonNotGiven">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="prescription" type="FHIR.Reference"/>
        <ns4:element name="device">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage" type="FHIR.MedicationAdministration.Dosage"/>
        <ns4:element name="eventHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Ratio" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="numerator" type="FHIR.Quantity"/>
        <ns4:element name="denominator" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.RequestHeader" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="field" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SampledData" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="origin" type="FHIR.Quantity"/>
        <ns4:element name="period" type="FHIR.decimal"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="lowerLimit" type="FHIR.decimal"/>
        <ns4:element name="upperLimit" type="FHIR.decimal"/>
        <ns4:element name="dimensions" type="FHIR.positiveInt"/>
        <ns4:element name="data" type="FHIR.SampledDataDataType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FlagStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ResourceType"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
        <ns4:element name="documentation" type="FHIR.markdown"/>
        <ns4:element name="interaction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Interaction"/>
        </ns4:element>
        <ns4:element name="versioning" type="FHIR.ResourceVersionPolicy"/>
        <ns4:element name="readHistory" type="FHIR.boolean"/>
        <ns4:element name="updateCreate" type="FHIR.boolean"/>
        <ns4:element name="conditionalCreate" type="FHIR.boolean"/>
        <ns4:element name="conditionalRead" type="FHIR.ConditionalReadStatus"/>
        <ns4:element name="conditionalUpdate" type="FHIR.boolean"/>
        <ns4:element name="conditionalDelete" type="FHIR.ConditionalDeleteStatus"/>
        <ns4:element name="referencePolicy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ReferenceHandlingPolicy"/>
        </ns4:element>
        <ns4:element name="searchInclude">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchRevInclude">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SearchParam"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Restriction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="repetitions" type="FHIR.positiveInt"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="recipient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="recorded" type="FHIR.instant"/>
        <ns4:element name="policy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="activity" type="FHIR.Coding"/>
        <ns4:element name="agent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Agent"/>
        </ns4:element>
        <ns4:element name="entity">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Entity"/>
        </ns4:element>
        <ns4:element name="signature">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Variable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="defaultValue" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="expression" type="FHIR.string"/>
        <ns4:element name="headerField" type="FHIR.string"/>
        <ns4:element name="hint" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.MedicationStatus"/>
        <ns4:element name="isBrand" type="FHIR.boolean"/>
        <ns4:element name="isOverTheCounter" type="FHIR.boolean"/>
        <ns4:element name="manufacturer" type="FHIR.Reference"/>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="ingredient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Medication.Ingredient"/>
        </ns4:element>
        <ns4:element name="package" type="FHIR.Medication.Package"/>
        <ns4:element name="image">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan.Activity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcomeCodeableConcept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="progress">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="detail" type="FHIR.CarePlan.Detail"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Goal.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" type="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dueD">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Distance" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.Exclude" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="designation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExpansionProfile.Designation2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ActionParticipantType"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Mapping" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="map" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="contract" type="FHIR.Reference"/>
        <ns4:element name="benefitBalance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponse.BenefitBalance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.id"/>
        <ns4:element name="source">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Source"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Target"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Rule"/>
        </ns4:element>
        <ns4:element name="dependent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Dependent"/>
        </ns4:element>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionClinicalStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ListStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="structure">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Structure"/>
        </ns4:element>
        <ns4:element name="import">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="base64Binary" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HumanName" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.NameUse"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="family" type="FHIR.string"/>
        <ns4:element name="given">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="prefix">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="suffix">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.EnableWhen" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="question" type="FHIR.string"/>
        <ns4:element name="hasAnswer" type="FHIR.boolean"/>
        <ns4:element name="answer">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="resource" type="FHIR.FHIRDefinedType"/>
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="accept" type="FHIR.ContentType"/>
        <ns4:element name="contentType" type="FHIR.ContentType"/>
        <ns4:element name="destination" type="FHIR.integer"/>
        <ns4:element name="encodeRequestUrl" type="FHIR.boolean"/>
        <ns4:element name="origin" type="FHIR.integer"/>
        <ns4:element name="params" type="FHIR.string"/>
        <ns4:element name="requestHeader">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.RequestHeader"/>
        </ns4:element>
        <ns4:element name="requestId" type="FHIR.id"/>
        <ns4:element name="responseId" type="FHIR.id"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
        <ns4:element name="targetId" type="FHIR.id"/>
        <ns4:element name="url" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="type" type="FHIR.GroupType"/>
        <ns4:element name="actual" type="FHIR.boolean"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="quantity" type="FHIR.unsignedInt"/>
        <ns4:element name="characteristic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Characteristic"/>
        </ns4:element>
        <ns4:element name="member">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Member"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceUseStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CommunicationRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.RequestStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="medium">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="recipient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="payload">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CommunicationRequest.Payload"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="sender" type="FHIR.Reference"/>
        <ns4:element name="requester" type="FHIR.CommunicationRequest.Requester"/>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="resourceType" type="FHIR.CodeableConcept"/>
        <ns4:element name="party" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskAssessment.Prediction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="probability">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="qualitativeRisk" type="FHIR.CodeableConcept"/>
        <ns4:element name="relativeRisk" type="FHIR.decimal"/>
        <ns4:element name="when">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="rationale" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssue" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.ObservationStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="severity" type="FHIR.DetectedIssueSeverity"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="implicated">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="detail" type="FHIR.string"/>
        <ns4:element name="reference" type="FHIR.uri"/>
        <ns4:element name="mitigation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DetectedIssue.Mitigation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventAgentNetworkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Location" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.LocationStatus"/>
        <ns4:element name="operationalStatus" type="FHIR.Coding"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="mode" type="FHIR.LocationMode"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" type="FHIR.Address"/>
        <ns4:element name="physicalType" type="FHIR.CodeableConcept"/>
        <ns4:element name="position" type="FHIR.Location.Position"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="partOf" type="FHIR.Reference"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Designation"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Property1"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CommunicationRequest.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BackboneElement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="modifierExtension">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Resource" retrievable="false" baseType="System.Any">
        <ns4:element name="id" type="FHIR.id"/>
        <ns4:element name="meta" type="FHIR.Meta"/>
        <ns4:element name="implicitRules" type="FHIR.uri"/>
        <ns4:element name="language" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AddressUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Dependency" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.GuideDependencyType"/>
        <ns4:element name="uri" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.TestReportParticipantType"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="display" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionalDeleteStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.NutritionOrderStatus"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="dateTime" type="FHIR.dateTime"/>
        <ns4:element name="orderer" type="FHIR.Reference"/>
        <ns4:element name="allergyIntolerance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="foodPreferenceModifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="excludeFoodModifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="oralDiet" type="FHIR.NutritionOrder.OralDiet"/>
        <ns4:element name="supplement">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Supplement"/>
        </ns4:element>
        <ns4:element name="enteralFormula" type="FHIR.NutritionOrder.EnteralFormula"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.SupplementalData" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="usage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="criteria" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPointUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricOperationalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" type="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Data" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="meaning" type="FHIR.ConsentDataMeaning"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" type="FHIR.id"/>
        <ns4:element name="relationship" type="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="uri" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContributorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferenceVersionRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ServiceDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contributor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contributor"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="trigger">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
        <ns4:element name="dataRequirement">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="operationDefinition" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Use" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IdentityAssuranceLevel" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Detail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.id"/>
        <ns4:element name="code" type="FHIR.ResponseType"/>
        <ns4:element name="details" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Slicing" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="discriminator">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Discriminator"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="ordered" type="FHIR.boolean"/>
        <ns4:element name="rules" type="FHIR.SlicingRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricColor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchEntryMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group.Member" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="inactive" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.SupplyRequestStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.RequestPriority"/>
        <ns4:element name="orderedItem" type="FHIR.SupplyRequest.OrderedItem"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" type="FHIR.dateTime"/>
        <ns4:element name="requester" type="FHIR.SupplyRequest.Requester"/>
        <ns4:element name="supplier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="deliverFrom" type="FHIR.Reference"/>
        <ns4:element name="deliverTo" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="time" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Actor1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="protocol">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ResearchStudyStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="focus">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="keyword">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="enrollment">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="sponsor" type="FHIR.Reference"/>
        <ns4:element name="principalInvestigator" type="FHIR.Reference"/>
        <ns4:element name="site">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonStopped" type="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="arm">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchStudy.Arm"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Differential" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="textEquivalent" type="FHIR.string"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Condition"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="groupingBehavior" type="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" type="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" type="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" type="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" type="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="resource" type="FHIR.Reference"/>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionalReadStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="allowed" type="FHIR.boolean"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionVerificationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.Detail"/>
        </ns4:element>
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="total" type="FHIR.Money"/>
        <ns4:element name="processNote">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.ProcessNote"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudy.Arm" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Identifier" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.IdentifierUse"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="assigner" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FinancialResourceStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="statusHistory">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.StatusHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.Diagnosis"/>
        </ns4:element>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="referralRequest">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careManager" type="FHIR.Reference"/>
        <ns4:element name="team">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestReport.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestReport.Operation"/>
        <ns4:element name="assert" type="FHIR.TestReport.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataElement.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="packageCode" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Organization" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="partOf" type="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Organization.Contact"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactDetail" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Element" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="target">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.OralDiet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="schedule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="nutrient">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Nutrient"/>
        </ns4:element>
        <ns4:element name="texture">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Texture"/>
        </ns4:element>
        <ns4:element name="fluidConsistencyType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="instruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="unsignedInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NameUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.FixedVersion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="mode" type="FHIR.SystemVersionProcessingMode"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubscriptionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReferenceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LocationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" type="FHIR.id"/>
        <ns4:element name="relationship" type="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="integer" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="repositoryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRSubstanceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Basic" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.date"/>
        <ns4:element name="author" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UnknownContentCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ClinicalImpressionStatus"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="assessor" type="FHIR.Reference"/>
        <ns4:element name="previous" type="FHIR.Reference"/>
        <ns4:element name="problem">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="investigation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Investigation"/>
        </ns4:element>
        <ns4:element name="protocol">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="summary" type="FHIR.string"/>
        <ns4:element name="finding">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Finding"/>
        </ns4:element>
        <ns4:element name="prognosisCodeableConcept">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="prognosisReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpansionProfile.Include" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="designation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExpansionProfile.Designation1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NoteType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.ChargeItemStatus"/>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItem.Participant"/>
        </ns4:element>
        <ns4:element name="performingOrganization" type="FHIR.Reference"/>
        <ns4:element name="requestingOrganization" type="FHIR.Reference"/>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="bodysite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="factorOverride" type="FHIR.decimal"/>
        <ns4:element name="priceOverride" type="FHIR.Money"/>
        <ns4:element name="overrideReason" type="FHIR.string"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="enteredDate" type="FHIR.dateTime"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="service">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="supportingInformation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Fixture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="autocreate" type="FHIR.boolean"/>
        <ns4:element name="autodelete" type="FHIR.boolean"/>
        <ns4:element name="resource" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation" type="FHIR.CodeableConcept"/>
        <ns4:element name="referenceRange">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.ReferenceRange"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="releaseDate" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HTTPVerb" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.SearchParam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.uri"/>
        <ns4:element name="type" type="FHIR.SearchParamType"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystemContentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="software" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="contact" type="FHIR.ContactPoint"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskAssessment" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="basedOn" type="FHIR.Reference"/>
        <ns4:element name="parent" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.ObservationStatus"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="condition" type="FHIR.Reference"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="basis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="prediction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskAssessment.Prediction"/>
        </ns4:element>
        <ns4:element name="mitigation" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="use" type="FHIR.Use"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="billablePeriod" type="FHIR.Period"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="insurer" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserve" type="FHIR.CodeableConcept"/>
        <ns4:element name="related">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Related"/>
        </ns4:element>
        <ns4:element name="prescription" type="FHIR.Reference"/>
        <ns4:element name="originalPrescription" type="FHIR.Reference"/>
        <ns4:element name="payee" type="FHIR.Claim.Payee"/>
        <ns4:element name="referral" type="FHIR.Reference"/>
        <ns4:element name="facility" type="FHIR.Reference"/>
        <ns4:element name="careTeam">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.CareTeam"/>
        </ns4:element>
        <ns4:element name="information">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Information"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Procedure"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Insurance"/>
        </ns4:element>
        <ns4:element name="accident" type="FHIR.Claim.Accident"/>
        <ns4:element name="employmentImpacted" type="FHIR.Period"/>
        <ns4:element name="hospitalization" type="FHIR.Period"/>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Item"/>
        </ns4:element>
        <ns4:element name="total" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Binding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="strength" type="FHIR.BindingStrength"/>
        <ns4:element name="valueSet">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="category" type="FHIR.MessageSignificanceCategory"/>
        <ns4:element name="mode" type="FHIR.EventCapabilityMode"/>
        <ns4:element name="focus" type="FHIR.ResourceType"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCareStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RemittanceOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRDeviceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="responsible" type="FHIR.boolean"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" type="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="due" type="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPointSystem" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Global" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ResourceType"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SlotStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="during" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProcessRequest.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Certificate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="blob" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Parameters" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="parameter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Parameters.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="providedBy" type="FHIR.Reference"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="extraDetails" type="FHIR.string"/>
        <ns4:element name="photo" type="FHIR.Attachment"/>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="coverageArea">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="serviceProvisionCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="eligibility" type="FHIR.CodeableConcept"/>
        <ns4:element name="eligibilityNote" type="FHIR.string"/>
        <ns4:element name="programName">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="characteristic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referralMethod">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentRequired" type="FHIR.boolean"/>
        <ns4:element name="availableTime">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" type="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" type="FHIR.ConditionClinicalStatusCodes"/>
        <ns4:element name="verificationStatus" type="FHIR.ConditionVerificationStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="severity" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="abatement">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="assertedDate" type="FHIR.dateTime"/>
        <ns4:element name="asserter" type="FHIR.Reference"/>
        <ns4:element name="stage" type="FHIR.Condition.Stage"/>
        <ns4:element name="evidence">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Condition.Evidence"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponse.BenefitBalance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="subCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="excluded" type="FHIR.boolean"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="network" type="FHIR.CodeableConcept"/>
        <ns4:element name="unit" type="FHIR.CodeableConcept"/>
        <ns4:element name="term" type="FHIR.CodeableConcept"/>
        <ns4:element name="financial">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponse.Financial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Search" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.SearchEntryMode"/>
        <ns4:element name="score" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PropertyType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Type" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="code" type="FHIR.uri"/>
        <ns4:element name="profile" type="FHIR.uri"/>
        <ns4:element name="targetProfile" type="FHIR.uri"/>
        <ns4:element name="aggregation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AggregationMode"/>
        </ns4:element>
        <ns4:element name="versioning" type="FHIR.ReferenceVersionRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.Option" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="markdown" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TypeDerivationRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Subscription.Channel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.SubscriptionChannelType"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
        <ns4:element name="payload" type="FHIR.string"/>
        <ns4:element name="header">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.Requester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="agent" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="detailSequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="subdetailSequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Goal" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.GoalStatus"/>
        <ns4:element name="category">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="start">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="target" type="FHIR.Goal.Target"/>
        <ns4:element name="statusDate" type="FHIR.date"/>
        <ns4:element name="statusReason" type="FHIR.string"/>
        <ns4:element name="expressedBy" type="FHIR.Reference"/>
        <ns4:element name="addresses">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="outcomeCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="other" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.LinkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidanceResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuantityComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.OperationParameterUse"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.FHIRAllTypes"/>
        <ns4:element name="searchType" type="FHIR.SearchParamType"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
        <ns4:element name="binding" type="FHIR.OperationDefinition.Binding"/>
        <ns4:element name="part">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" type="FHIR.id"/>
        <ns4:element name="contextType" type="FHIR.StructureMapContextType"/>
        <ns4:element name="element" type="FHIR.string"/>
        <ns4:element name="variable" type="FHIR.id"/>
        <ns4:element name="listMode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMapTargetListMode"/>
        </ns4:element>
        <ns4:element name="listRuleId" type="FHIR.id"/>
        <ns4:element name="transform" type="FHIR.StructureMapTransform"/>
        <ns4:element name="parameter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedArtifactType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatement" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.MedicationStatementStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="effective">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="dateAsserted" type="FHIR.dateTime"/>
        <ns4:element name="informationSource" type="FHIR.Reference"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="derivedFrom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="taken" type="FHIR.MedicationStatementTaken"/>
        <ns4:element name="reasonNotTaken">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="focal" type="FHIR.boolean"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="businessArrangement" type="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="claimResponse" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="careTeamLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationLinkId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="service" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" type="FHIR.Quantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestReport.Operation"/>
        <ns4:element name="assert" type="FHIR.TestReport.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="oid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="userSelected" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReportType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Period" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="start" type="FHIR.dateTime"/>
        <ns4:element name="end" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionPrecheckBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="amount" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="accessionIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.SpecimenStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="receivedTime" type="FHIR.dateTime"/>
        <ns4:element name="parent">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="request">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="collection" type="FHIR.Specimen.Collection"/>
        <ns4:element name="processing">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Processing"/>
        </ns4:element>
        <ns4:element name="container">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Container"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyMemberHistory" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" type="FHIR.FamilyHistoryStatus"/>
        <ns4:element name="notDone" type="FHIR.boolean"/>
        <ns4:element name="notDoneReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="gender" type="FHIR.AdministrativeGender"/>
        <ns4:element name="born">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="age">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="estimatedAge" type="FHIR.boolean"/>
        <ns4:element name="deceased">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FamilyMemberHistory.Condition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentManifest.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="p">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SampledDataDataType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="textEquivalent" type="FHIR.string"/>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="goalId">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="triggerDefinition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Condition"/>
        </ns4:element>
        <ns4:element name="input">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Participant"/>
        </ns4:element>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="groupingBehavior" type="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" type="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" type="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" type="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" type="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="definition" type="FHIR.Reference"/>
        <ns4:element name="transform" type="FHIR.Reference"/>
        <ns4:element name="dynamicValue">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.DynamicValue"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="who">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="onBehalfOf">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:typeSpecifier>
        </ns4:element>
        <ns4:element name="relatedAgentType" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatementTaken" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentManifest.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="ref" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="detail">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Quantity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="FHIR.decimal"/>
        <ns4:element name="comparator" type="FHIR.QuantityComparator"/>
        <ns4:element name="unit" type="FHIR.string"/>
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompositionAttestationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="language" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.Coding"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCalibrationState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GroupType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Except" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ConsentExceptType"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="actor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Actor1"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="securityLabel">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="purpose">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="class">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="code">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="dataPeriod" type="FHIR.Period"/>
        <ns4:element name="data">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Data1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="profile">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="mustSupport">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="codeFilter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.CodeFilter"/>
        </ns4:element>
        <ns4:element name="dateFilter">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.DateFilter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TypeRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="dependency">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Dependency"/>
        </ns4:element>
        <ns4:element name="package">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Package"/>
        </ns4:element>
        <ns4:element name="global">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Global"/>
        </ns4:element>
        <ns4:element name="binary">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="page" type="FHIR.ImplementationGuide.Page"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="population">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Population"/>
        </ns4:element>
        <ns4:element name="stratifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.markdown"/>
        <ns4:element name="purpose" type="FHIR.markdown"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="approvalDate" type="FHIR.date"/>
        <ns4:element name="lastReviewDate" type="FHIR.date"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="useContext">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="topic">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contributor">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contributor"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="copyright" type="FHIR.markdown"/>
        <ns4:element name="relatedArtifact">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Goal"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystemHierarchyMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UsageContext" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="value">
            <ns4:typeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:typeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Ruleset" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resource" type="FHIR.Reference"/>
        <ns4:element name="rule">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Rule1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Batch" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="expirationDate" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Base" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="min" type="FHIR.unsignedInt"/>
        <ns4:element name="max" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="type" type="FHIR.BundleType"/>
        <ns4:element name="total" type="FHIR.unsignedInt"/>
        <ns4:element name="link">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Link"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Entry"/>
        </ns4:element>
        <ns4:element name="signature" type="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Hospitalization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="preAdmissionIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="origin" type="FHIR.Reference"/>
        <ns4:element name="admitSource" type="FHIR.CodeableConcept"/>
        <ns4:element name="reAdmission" type="FHIR.CodeableConcept"/>
        <ns4:element name="dietPreference">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialCourtesy">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialArrangement">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="dischargeDisposition" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Organization.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:typeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" type="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Param3" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionBase" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BundleType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.string"/>
        <ns4:element name="location" type="FHIR.uri"/>
        <ns4:element name="etag" type="FHIR.string"/>
        <ns4:element name="lastModified" type="FHIR.instant"/>
        <ns4:element name="outcome" type="FHIR.ResourceContainer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SystemVersionProcessingMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Sequence.ReferenceSeq" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="chromosome" type="FHIR.CodeableConcept"/>
        <ns4:element name="genomeBuild" type="FHIR.string"/>
        <ns4:element name="referenceSeqId" type="FHIR.CodeableConcept"/>
        <ns4:element name="referenceSeqPointer" type="FHIR.Reference"/>
        <ns4:element name="referenceSeqString" type="FHIR.string"/>
        <ns4:element name="strand" type="FHIR.integer"/>
        <ns4:element name="windowStart" type="FHIR.integer"/>
        <ns4:element name="windowEnd" type="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Param1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Param2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:conversionInfo fromType="FHIR.Coding" toType="System.Code" functionName="FHIRHelpers.ToCode"/>
    <ns4:conversionInfo fromType="FHIR.CodeableConcept" toType="System.Concept" functionName="FHIRHelpers.ToConcept"/>
    <ns4:conversionInfo fromType="FHIR.Quantity" toType="System.Quantity" functionName="FHIRHelpers.ToQuantity"/>
    <ns4:conversionInfo fromType="FHIR.Period" toType="Interval&lt;System.DateTime&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo fromType="FHIR.Range" toType="Interval&lt;System.Quantity&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToRatio" fromType="FHIR.Ratio" toType="System.Ratio"/>
    <ns4:conversionInfo fromType="FHIR.dateTime" toType="System.DateTime" functionName="FHIRHelpers.ToDateTime"/>
    <ns4:conversionInfo fromType="FHIR.date" toType="System.Date" functionName="FHIRHelpers.ToDate"/>
    <ns4:conversionInfo fromType="FHIR.uuid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestScriptRequestMethodCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProvenanceEntityRole" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UnitsOfTime" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SpecimenStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RestfulCapabilityMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DetectedIssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CareTeamStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DataElementStringency" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionEyes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureDefinitionKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PublicationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConsentDataMeaning" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapSourceListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireResponseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchComparator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ChargeItemStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionParticipantType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceClinicalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanActivityStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionList" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportResult" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConceptMapGroupUnmappedMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.instant" toType="System.DateTime" functionName="FHIRHelpers.ToDateTime"/>
    <ns4:conversionInfo fromType="FHIR.DocumentMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionOperatorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DaysOfWeek" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContentType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapContextType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FamilyHistoryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.positiveInt" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.ClinicalImpressionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionResponseTypes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NarrativeStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MeasmntPrinciple" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConsentExceptType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.string" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionRequiredBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EndpointStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuidePageKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuideDependencyType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResourceVersionPolicy" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationAdministrationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionCardinalityBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationRequestIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemIdentifierType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ImmunizationStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AccountStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationDispenseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConfidentialityClassification" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentifierUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DigitalMediaType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapTargetListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportParticipantType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BindingStrength" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipantRequired" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiscriminatorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.XPathUsageType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapInputMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.InstanceAvailability" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.id" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LinkageType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ReferenceHandlingPolicy" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FilterOperator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResearchStudyStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExtensionContext" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRDefinedType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConstraintSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventCapabilityMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContractResourceStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResearchSubjectStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UDIEntryType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportActionResult" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapTransform" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResponseType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.decimal" toType="System.Decimal" functionName="FHIRHelpers.ToDecimal"/>
    <ns4:conversionInfo fromType="FHIR.AggregationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CapabilityStatementKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceVerificationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventTiming" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GoalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchParamType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SystemRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionGroupingBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapModelMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TaskStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdverseEventCausality" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionChannelType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GraphCompartmentRule" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionDirectionType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlicingRules" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExplanationOfBenefitStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConsentState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdverseEventCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LinkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCriticality" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationRequestPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConceptMapEquivalence" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRAllTypes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PropertyRepresentation" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventAction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TriggerType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchModifierCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AppointmentStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MessageSignificanceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationParameterUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionConditionKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.qualityType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdministrativeGender" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResourceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireItemType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.boolean" toType="System.Boolean" functionName="FHIRHelpers.ToBoolean"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapGroupTypeMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.code" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionSelectionBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterLocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyDeliveryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiagnosticReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FlagStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionClinicalStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.base64Binary" toType="System.String" functionName="FHIRHelpers.Tobase64Binary"/>
    <ns4:conversionInfo fromType="FHIR.DeviceUseStatementStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventAgentNetworkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionalDeleteStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricOperationalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NutritionOrderStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.uri" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContributorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ReferenceVersionRules" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.Use" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentityAssuranceLevel" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MeasureReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricColor" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchEntryMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.time" toType="System.Time" functionName="FHIRHelpers.ToTime"/>
    <ns4:conversionInfo fromType="FHIR.ConditionalReadStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionVerificationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FinancialResourceStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.unsignedInt" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.NameUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentReferenceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.integer" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.repositoryType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRSubstanceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UnknownContentCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NoteType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.HTTPVerb" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CodeSystemContentMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EpisodeOfCareStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RemittanceOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRDeviceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointSystem" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlotStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PropertyType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.markdown" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TypeDerivationRule" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationStatementStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuidanceResponseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuantityComparator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RelatedArtifactType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.oid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MeasureReportType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionPrecheckBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SampledDataDataType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationStatementTaken" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompartmentType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionAttestationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GroupType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TypeRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CodeSystemHierarchyMeaning" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionBase" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BundleType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SystemVersionProcessingMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
</ns4:modelInfo>`;
