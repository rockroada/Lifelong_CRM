// JScript source code
var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc";

var flds = {
    'addressVerification': 'llaa_addressverification',
    'addressVerificationDate': 'llaa_addressverificationdate',
    'aidsDiagnosis': 'llaa_aidsdiagnosis',
    'aidsDiagnosisDate': 'llaa_aidsdiagnosisdate',
    'atRisk': 'llaa_atriskofhivinfection',
    'authorizationForServicesSigned': 'llaa_authorizationforservicessigned',
    'authorizationForServicesSignedDate': 'llaa_authorizationforservicessigneddate',
    'canLeaveMessages': 'llaa_canleavemessages',
    'canSendEmail': 'llaa_cansendemail',
    'cdNarrative': 'llaa_chemicaldependencynarrative',
    'cdReferral': 'llaa_chemicaldependencyreferral',
    'cdReferralDate': 'llaa_chemicaldependencyreferraldate',
    'cdTreatmentReceived': 'llaa_chemicaldependencytreatmentreceived',
    'clientRightsSigned': 'llaa_clientrightsandresponsibilitiessigned',
    'clientRightsSignedDate': 'llaa_clientrightsandresponsibilitiessigneddate',
    'cmReferral': 'llaa_casemanagementreferral',
    'cmReferralDate': 'llaa_casemanagementreferraldate',
    'csbReferral': 'llaa_chickensoupbrigadereferral',
    'csbReferralDate': 'llaa_chickensoupbrigadereferraldate',
    'currentSuicideIdeation': 'llaa_currentsuicideideation',
    'currentSuicideIdeationNarrative': 'llaa_currentsuicideideationnarrative',
    'dentures': 'llaa_dentures',
    'denturesFit': 'llaa_denturesfit',
    'dependent': 'llaa_dependent',
    'disabled': 'llaa_disabled',
    'disabledDate': 'llaa_disableddate',
    'email': 'emailaddress1',
    'emancipated': 'llaa_emancipated',
    'emancipationDocumentationUploaded': 'llaa_emancipationdocumentationuploaded',
    'grievanceProceduresSigned': 'llaa_grievanceproceduressigned',
    'grievanceProceduresSignedDate': 'llaa_grievanceproceduressigneddate',
    'historyOfViolentOrAggressiveBehavior': 'llaa_historyofviolentoraggressivebehavior',
    'hivPositive': 'llaa_hivpositive',
    'hivDiagnosisDate': 'llaa_hivdiagnosisdate',
    'homeless': 'llaa_homeless',
    'homelessDeclarationSigned': 'llaa_homelessdeclarationsigned',
    'homelessDeclarationSignedDate': 'llaa_homelessdeclarationsigneddate',
    'housingReferral': 'llaa_housingreferral',
    'housingReferralDate': 'llaa_housingreferraldate',
    'housingStatus': 'llaa_housingstatus',
    'isReferral': 'llaa_insuranceservicesreferral',
    'isReferralDate': 'llaa_insuranceservicesreferraldate',
    'llaaEmployeeBelievesSafetyRisk': 'llaa_llaaemployeebelievessafetyrisk',
    'McKinneyActHomeless': 'llaa_mckinneyacthomeless',
    'medicaidLastApplicationDate': 'llaa_medicaidlastapplicationdate',
    'medicaidMedicareEligible': 'llaa_medicaidmedicareeligible',
    'mhNarrative': 'llaa_mentalhealthnarrative',
    'mhReferral': 'llaa_mentalhealthreferral',
    'mhReferralDate': 'llaa_mentalhealthreferraldate',
    'mhTreatmentReceived': 'llaa_mentalhealthtreatmentreceived',
    'militaryService': 'llaa_militaryservice',
    'militaryServiceBranch': 'llaa_militaryservicebranch',
    'militaryServiceConflicts': 'llaa_militaryserviceconflicts',
    'mostRecentSuicideAttempt': 'llaa_mostrecentsuicideattempt',
    'mustMoveIfRentIncreased': 'llaa_mustmoveifrentincreased',
    'noIncomeSelfDeclarationSigned': 'llaa_noincomeselfdeclarationsigned',
    'noIncomeSelfDeclarationSignedDate': 'llaa_noincomeselfdeclarationsigneddate',
    'noPhone': 'llaa_nophone',
    'opportunisticInfections': 'llaa_opportunisticinfections',
    'opportunisticInfectionsNarrative': 'llaa_opportunisticinfectionsnarrative',
    'pastSuicideAttempts': 'llaa_pastsuicideattempts',
    'peReferral': 'llaa_preventioneducationreferral',
    'peReferralDate': 'llaa_preventioneducationreferraldate',
    'phone1': 'telephone1',
    'phone2': 'telephone2',
    'privacyNoticeSigned': 'llaa_privacynoticesigned',
    'privacyNoticeSignedDate': 'llaa_privacynoticesigneddate',
    'rentOrOwn': 'llaa_rentorown',
    'releaseOfInformationSigned': 'llaa_releaseofinformationsigned',
    'releaseOfInformationSignedDate': 'llaa_releaseofinformationsigneddate',
    'sexualOrientation': 'llaa_sexualorientation',
    'sexualOrientationOther': 'llaa_sexualorientationother',
    'ssn': 'llaa_socialsecuritynumber',
    'substanceAbuseBehavior': 'llaa_substanceabusebehavior',
    'substanceAbuseBehaviorNarrative': 'llaa_substanceabusebehaviornarrative',
    'suicideNarrative': 'llaa_suicidenarrative',
    'thirdPartyPayee': 'llaa_thirdpartypayeepresent',
    'thirdPartyPayeeName': 'llaa_thirdpartypayeename',
    'thirdPartyPayeePhoneNumber': 'llaa_thirdpartypayeephonenumber',
    'thirdPartyPayeeRelationship': 'llaa_thirdpartypayeerelationship',
    'tobaccoUse': 'llaa_tobaccouse',
    'tobaccoUseLastDate': 'llaa_tobaccouselastdate',
    'transientAddress': 'llaa_transientaddress',
    'vaBenefits': 'llaa_vabenefits',
    'verificationOnFile': 'llaa_verificationonfile',
    'verificationDate': 'llaa_verificationfiledate',
    'weightChange': 'llaa_weightchange',
    'weightChangeIntentional': 'llaa_weightchangeintentional',
    'weightDescription': 'llaa_weightdescription'
};

function form_onLoad() {
    // We only need to trigger event handlers when editing.
    if (Xrm.Page.ui.getFormType() == 2) {
        casemanagementreferral_onChange();
        mentalhealthreferral_onChange();
        chemicaldependencyreferral_onChange();
        housingreferral_onChange();
        insuranceservicesreferral_onChange();
        preventioneducationreferral_onChange();
        chickensoupbrigadereferral_onChange();
        addressverification_onChange();
        nophone_onChange();
        email_onChange();
        sexualorientation_onChange();
        weightchange_onChange();
        tobaccouse_onChange();
        mentalhealthtreatment_onChange();
        chemicaldependencytreatment_onChange();
        dentures_onChange();
        disabled_onChange();
        hivpositive_onChange();
        aidsdiagnosis_onChange();
        opportunisticinfections_onChange();
        verificationonfile_onChange();
        atrisk_onChange();
        clientrightssigned_onChange();
        grievanceproceduressigned_onChange();
        authorizationforservicessigned_onChange();
        privacynoticesigned_onChange();
        releaseofinformationsigned_onChange();
        homelessdeclarationsigned_onChange();
        noincomeselfdeclarationsigned_onChange();
        homeless_onChange();
        rentorown_onChange();
        thirdpartypayee_onChange();
        pastsuicideattempts_onChange();
        currentsuicideideation_onChange();
        substanceabusebehavior_onChange();
        historyofviolentbehavior_onChange();
        birthdate_onChange();
        emancipated_onChange();
        militaryservice_onChange();
        medicaidmedicareeligible_onChange();
        securityAlerts();
        //document.getElementById("llaa_setsafetyalert_c").style.color = "red";
    }
}

//var alertsEnum = {"INFO", "WARNING", "ERROR"};
function upAlerts() {
    var entityGuid = Xrm.Page.data.entity.getId();
    var today = new Date();

    if (SDK && SDK.REST) {
        SDK.REST.retrieveMultipleRecords(
			"llaa_safetyconcern",
            "$filter=llaa_Contact/Id eq (guid'" + entityGuid + "')",
        function (data) {
            if (data.length <= 0) {

            }
            for (var i = 0; i < data.length; i++) {
                var alertDate = data[i]["llaa_ExpirationDate"];
                if (!alertDate || alertDate >= today) {
                    var alertDate = data[i]["llaa_ExpirationDate"];
                    var alertMessage = data[i]["llaa_name"];
                    var alertSeverity = data[i]["llaa_Severity"];

                    switch (alertSeverity.Value) {
                        case 1:
                            Xrm.Page.ui.setFormNotification(alertMessage, "INFORMATION", String(i));
                            break;
                        case 2:
                            Xrm.Page.ui.setFormNotification(alertMessage, "WARNING", String(i));
                            break;
                        case 3:
                            Xrm.Page.ui.setFormNotification(alertMessage, "ERROR", String(i));
                            break;
                        default:
                            Xrm.Page.ui.setFormNotification(alertMessage, "INFORMATION", String(i));
                    }
                }
            }
        },
        function (error) {
            //alert("Retrieve Error");
            /*Die Silently */
        },
        function (complete) { /*done*/ }
        );
    }
}


function securityAlerts() {
    if (Xrm.Page.data.entity.attributes.get("llaa_setsafetyalert").getValue() == true) {
        Xrm.Page.ui.setFormNotification('SECURITY ALERT', 'ERROR', 'SafetyAlert');
    }
    else {
        Xrm.Page.ui.clearFormNotification("SafetyAlert");
    }
}

function form_onSave(executionObject) {
    // Validate SSN if user edited it.
    var ssn = Xrm.Page.getAttribute(flds.ssn).getValue();
    var ssnChanged = Xrm.Page.getAttribute(flds.ssn).getIsDirty();
    var errorMsg = "";
    if ((ssn != null) && (ssn != "999-99-9999") && ssnChanged) {
        var serverUrl = Xrm.Page.context.getServerUrl();
        var ODATA_Query = "/ContactSet?$select=ContactId&$filter=llaa_SocialSecurityNumber eq '" + ssn + "'";
        var ODATA_Final_url = serverUrl + ODATA_ENDPOINT + ODATA_Query;
        $.ajax({
            async: false,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: ODATA_Final_url,
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function (data, textStatus, XmlHttpRequest) {
                if (data.d.results.length == 1) {
                    errorMsg = "This SSN is associated with another contact record";
                }
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                errorMsg = "Error validating SSN (" + errorThrown + ")";
            }
        });
        if (errorMsg != "") {
            alert(errorMsg);
            Xrm.Page.ui.controls.get(flds.ssn).setFocus();
            executionObject.getEventArgs().preventDefault();
        }
    }
}

function nophone_onChange() {
    var nophone = Xrm.Page.getAttribute(flds.noPhone).getValue();
    var reqlevel = "";
    Xrm.Page.getControl(flds.phone1).setDisabled(nophone);
    Xrm.Page.getControl(flds.canLeaveMessages).setDisabled(nophone);
    Xrm.Page.getControl(flds.phone2).setDisabled(nophone);
    if (nophone) {
        reqlevel = "none";
        clearField(flds.phone1);
        clearField(flds.phone2);
        clearField(flds.canLeaveMessages);
    }
    else {
        reqlevel = "required";
    }
    Xrm.Page.getAttribute(flds.phone1).setRequiredLevel(reqlevel);
    Xrm.Page.getAttribute(flds.canLeaveMessages).setRequiredLevel(reqlevel);
}

function sexualorientation_onChange() {
    var sexualorientation = Xrm.Page.getAttribute(flds.sexualOrientation).getValue();
    var sexualorientationother = (sexualorientation == 9);
    Xrm.Page.getControl(flds.sexualOrientationOther).setVisible(sexualorientationother);
    if (!sexualorientationother) {
        clearField(flds.sexualOrientationOther);
    }
}

function email_onChange() {
    var email = Xrm.Page.getAttribute(flds.email).getValue();
    Xrm.Page.getControl(flds.canSendEmail).setDisabled(email == null);
    doCheckboxDependency((email != null), flds.canSendEmail);
}

function weightchange_onChange() {
    var weightchange = Xrm.Page.getAttribute(flds.weightChange).getValue();
    Xrm.Page.getControl(flds.weightChangeIntentional).setVisible(weightchange);
    Xrm.Page.getControl(flds.weightDescription).setVisible(weightchange);
    if (weightchange) {
        makeFieldRequired(flds.weightChangeIntentional);
    }
    else {
        makeFieldOptional(flds.weightChangeIntentional);
        clearField(flds.weightDescription);
    }
}

function tobaccouse_onChange() {
    var tobaccouse = Xrm.Page.getAttribute(flds.tobaccoUse).getValue();
    Xrm.Page.getControl(flds.tobaccoUseLastDate).setVisible(tobaccouse);
    doCheckboxDependency(tobaccouse, flds.tobaccoUseLastDate);
}

function mentalhealthtreatment_onChange() {
    var mhtreatment = Xrm.Page.getAttribute(flds.mhTreatmentReceived).getValue();
    Xrm.Page.getControl(flds.mhNarrative).setVisible(mhtreatment);
    if (!mhtreatment) {
        clearField(flds.mhNarrative);
    }
}

function chemicaldependencytreatment_onChange() {
    var cdtreatment = Xrm.Page.getAttribute(flds.cdTreatmentReceived).getValue();
    Xrm.Page.getControl(flds.cdNarrative).setVisible(cdtreatment);
    if (!cdtreatment) {
        clearField(flds.cdNarrative);
    }
}

function dentures_onChange() {
    var dentures = Xrm.Page.getAttribute(flds.dentures).getValue();
    Xrm.Page.getControl(flds.denturesFit).setVisible(dentures);
    if (!dentures) {
        clearField(flds.denturesFit);
    }
}

function disabled_onChange() {
    var disabled = Xrm.Page.getAttribute(flds.disabled).getValue();
    doCheckboxDependency(disabled, flds.disabledDate);
}

function hivpositive_onChange() {
    var hiv = Xrm.Page.getAttribute(flds.hivPositive).getValue();
    doCheckboxDependency(hiv, flds.hivDiagnosisDate);
}

function aidsdiagnosis_onChange() {
    var aids = Xrm.Page.getAttribute(flds.aidsDiagnosis).getValue();
    doCheckboxDependency(aids, flds.aidsDiagnosisDate);
}

function opportunisticinfections_onChange() {
    var oi = Xrm.Page.getAttribute(flds.opportunisticInfections).getValue();
    doCheckboxDependency(oi, flds.opportunisticInfectionsNarrative);
}

function verificationonfile_onChange() {
    var verified = Xrm.Page.getAttribute(flds.verificationOnFile).getValue();
    doCheckboxDependency(verified, flds.verificationDate);
}

function atrisk_onChange() {
    var atrisk = Xrm.Page.getAttribute(flds.atRisk).getValue();
    Xrm.Page.ui.tabs.get("tab_medical").sections.get("tab_medicalintake_section_3").setVisible(atrisk);
}

function clientrightssigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.clientRightsSigned).getValue();
    Xrm.Page.getControl(flds.clientRightsSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.clientRightsSignedDate);
}

function grievanceproceduressigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.grievanceProceduresSigned).getValue();
    Xrm.Page.getControl(flds.grievanceProceduresSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.grievanceProceduresSignedDate);
}

function authorizationforservicessigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.authorizationForServicesSigned).getValue();
    Xrm.Page.getControl(flds.authorizationForServicesSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.authorizationForServicesSignedDate);
}

function privacynoticesigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.privacyNoticeSigned).getValue();
    Xrm.Page.getControl(flds.privacyNoticeSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.privacyNoticeSignedDate);
}

function releaseofinformationsigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.releaseOfInformationSigned).getValue();
    Xrm.Page.getControl(flds.releaseOfInformationSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.releaseOfInformationSignedDate);
}

function homelessdeclarationsigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.homelessDeclarationSigned).getValue();
    Xrm.Page.getControl(flds.homelessDeclarationSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.homelessDeclarationSignedDate);
}

function noincomeselfdeclarationsigned_onChange() {
    var signed = Xrm.Page.getAttribute(flds.noIncomeSelfDeclarationSigned).getValue();
    Xrm.Page.getControl(flds.noIncomeSelfDeclarationSignedDate).setDisabled(!signed);
    doCheckboxDependency(signed, flds.noIncomeSelfDeclarationSignedDate);
}

function homeless_onChange() {
    var homeless = Xrm.Page.getAttribute(flds.homeless).getValue();
    Xrm.Page.getControl(flds.transientAddress).setDisabled(!homeless);
    Xrm.Page.getControl(flds.McKinneyActHomeless).setDisabled(!homeless);
    Xrm.Page.getControl(flds.housingStatus).setDisabled(homeless);
    Xrm.Page.getControl(flds.rentOrOwn).setDisabled(homeless);
    Xrm.Page.getControl(flds.mustMoveIfRentIncreased).setDisabled(homeless);
    if (homeless) {
        makeFieldRequired(flds.transientAddress);
        makeFieldRequired(flds.McKinneyActHomeless);
        clearField(flds.housingStatus);
        clearField(flds.rentOrOwn);
        clearField(flds.mustMoveIfRentIncreased);
    }
    else {
        clearAndMakeFieldOptional(flds.transientAddress);
        clearAndMakeFieldOptional(flds.McKinneyActHomeless);
    }
}

function rentorown_onChange() {
    var rentorown = Xrm.Page.getAttribute(flds.rentOrOwn).getValue();
    var rent = (rentorown == 1);
    Xrm.Page.getControl(flds.mustMoveIfRentIncreased).setDisabled(!rent);
    if (!rent) {
        clearField(flds.mustMoveIfRentIncreased);
    }
}

function thirdpartypayee_onChange() {
    var thirdpartypayee = Xrm.Page.getAttribute(flds.thirdPartyPayee).getValue();
    Xrm.Page.getControl(flds.thirdPartyPayeeName).setVisible(thirdpartypayee);
    Xrm.Page.getControl(flds.thirdPartyPayeePhoneNumber).setVisible(thirdpartypayee);
    Xrm.Page.getControl(flds.thirdPartyPayeeRelationship).setVisible(thirdpartypayee);
    doCheckboxDependency(thirdpartypayee, flds.thirdPartyPayeeName);
    doCheckboxDependency(thirdpartypayee, flds.thirdPartyPayeePhoneNumber);
    doCheckboxDependency(thirdpartypayee, flds.thirdPartyPayeeRelationship);
}

function pastsuicideattempts_onChange() {
    var pastsuicideattempts = Xrm.Page.getAttribute(flds.pastSuicideAttempts).getValue();
    Xrm.Page.getControl(flds.mostRecentSuicideAttempt).setVisible(pastsuicideattempts);
    Xrm.Page.getControl(flds.suicideNarrative).setVisible(pastsuicideattempts);
    if (!pastsuicideattempts) {
        clearField(flds.mostRecentSuicideAttempt);
        clearField(flds.suicideNarrative);
    }
}

function currentsuicideideation_onChange() {
    var currentsuicideideation = Xrm.Page.getAttribute(flds.currentSuicideIdeation).getValue();
    Xrm.Page.getControl(flds.currentSuicideIdeationNarrative).setVisible(currentsuicideideation);
    if (!currentsuicideideation) {
        clearField(flds.currentSuicideIdeationNarrative);
    }
}

function substanceabusebehavior_onChange() {
    var substanceabusebehavior = Xrm.Page.getAttribute(flds.substanceAbuseBehavior).getValue();
    Xrm.Page.getControl(flds.substanceAbuseBehaviorNarrative).setVisible(substanceabusebehavior);
    if (!substanceabusebehavior) {
        clearField(flds.substanceAbuseBehaviorNarrative);
    }
}

function historyofviolentbehavior_onChange() {
    var violent = Xrm.Page.getAttribute(flds.historyOfViolentOrAggressiveBehavior).getValue();
    doCheckboxDependency(violent, flds.llaaEmployeeBelievesSafetyRisk);
}

function militaryservice_onChange() {
    var militaryservice = Xrm.Page.getAttribute(flds.militaryService).getValue();
    Xrm.Page.getControl(flds.militaryServiceBranch).setVisible(militaryservice);
    Xrm.Page.getControl(flds.militaryServiceConflicts).setVisible(militaryservice);
    Xrm.Page.getControl(flds.vaBenefits).setVisible(militaryservice);
    if (!militaryservice) {
        clearField(flds.militaryServiceBranch);
        clearField(flds.militaryServiceConflicts);
        clearField(flds.vaBenefits);
    }
}

function medicaidmedicareeligible_onChange() {
    var mme = Xrm.Page.getAttribute(flds.medicaidMedicareEligible).getValue();
    var eligible = (mme == 1);
    Xrm.Page.getControl(flds.medicaidLastApplicationDate).setVisible(eligible);
    if (!eligible) {
        clearField(flds.medicaidLastApplicationDate);
    }
}

function birthdate_onChange() {
    var birthdate = Xrm.Page.getAttribute("birthdate").getValue();
    if (birthdate) {
        var year = birthdate.getFullYear();
        var month = birthdate.getMonth();
        var day = birthdate.getDate();
        var today = new Date();
        var age = today.getFullYear() - year;
        if ((today.getMonth() < month) || ((today.getMonth() == month) && (today.getDate() < day))) {
            age--;
        }
        Xrm.Page.getControl(flds.dependent).setVisible(age < 18);
    }
}

function dependent_onChange() {
    var dependent = Xrm.Page.getAttribute(flds.dependent).getValue();
    Xrm.Page.getControl(flds.emancipated).setVisible(dependent);
    if (!dependent) {
        clearField(flds.emancipated);
        Xrm.Page.getControl(flds.emancipationDocumentationUploaded).setVisible(false);
        clearField(flds.emancipationDocumentationUploaded);
    }
}

function emancipated_onChange() {
    var emancipated = Xrm.Page.getAttribute(flds.emancipated).getValue();
    Xrm.Page.getControl(flds.emancipationDocumentationUploaded).setVisible(emancipated);
    if (!emancipated) {
        clearField(flds.emancipationDocumentationUploaded);
    }
}

// Referrals

function casemanagementreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.cmReferral).getValue();
    Xrm.Page.getControl(flds.cmReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.cmReferralDate);
    }
}

function mentalhealthreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.mhReferral).getValue();
    Xrm.Page.getControl(flds.mhReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.mhReferralDate);
    }
}

function chemicaldependencyreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.cdReferral).getValue();
    Xrm.Page.getControl(flds.cdReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.cdReferralDate);
    }
}

function housingreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.housingReferral).getValue();
    Xrm.Page.getControl(flds.housingReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.housingReferralDate);
    }
}

function insuranceservicesreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.isReferral).getValue();
    Xrm.Page.getControl(flds.isReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.isReferralDate);
    }
}

function preventioneducationreferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.peReferral).getValue();
    Xrm.Page.getControl(flds.peReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.peReferralDate);
    }
}

function chickensoupbrigadereferral_onChange() {
    var referral = Xrm.Page.getAttribute(flds.csbReferral).getValue();
    Xrm.Page.getControl(flds.csbReferralDate).setDisabled(!referral);
    if (!referral) {
        clearField(flds.csbReferralDate);
    }
}

function addressverification_onChange() {
    var av = Xrm.Page.getAttribute(flds.addressVerification).getValue();
    Xrm.Page.getControl(flds.addressVerificationDate).setDisabled(!av);
    if (!av) {
        clearField(flds.addressVerificationDate);
    }
}

// Race/Ethnicity

function black_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_indigenousafricanblack").getValue() ||
					Xrm.Page.getAttribute("llaa_africanamericanblack").getValue() ||
					Xrm.Page.getAttribute("llaa_otherblack").getValue();
    Xrm.Page.getAttribute("llaa_blackorafricanamerican").setValue(selected);
}

function fbb_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_indigenousafricanblack").getValue();
    Xrm.Page.getAttribute("llaa_foreignbornblack").setValue(selected);
}

function hpi_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_nativehawaiian").getValue() ||
					Xrm.Page.getAttribute("llaa_polynesian").getValue() ||
					Xrm.Page.getAttribute("llaa_micronesian").getValue() ||
					Xrm.Page.getAttribute("llaa_otherpacific").getValue();
    Xrm.Page.getAttribute("llaa_hawaiianpacificislander").setValue(selected);
}

function white_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_arabiranianormiddleeastern").getValue() ||
					Xrm.Page.getAttribute("llaa_otherwhite").getValue();
    Xrm.Page.getAttribute("llaa_white").setValue(selected);
}

function aian_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_alaskanativealeuteskimo").getValue() ||
					Xrm.Page.getAttribute("llaa_americanindian").getValue() ||
					Xrm.Page.getAttribute("llaa_indigenoustoamericasotherthanus").getValue() ||
					Xrm.Page.getAttribute("llaa_otheramericanindigenous").getValue();
    Xrm.Page.getAttribute("llaa_americanindianalaskanative").setValue(selected);
}

function asian_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_asianindian").getValue() ||
					Xrm.Page.getAttribute("llaa_cambodian").getValue() ||
					Xrm.Page.getAttribute("llaa_chineseexcepttaiwanese").getValue() ||
					Xrm.Page.getAttribute("llaa_filipino").getValue() ||
					Xrm.Page.getAttribute("llaa_japanese").getValue() ||
					Xrm.Page.getAttribute("llaa_korean").getValue() ||
					Xrm.Page.getAttribute("llaa_vietnamese").getValue() ||
					Xrm.Page.getAttribute("llaa_otherasian").getValue();
    Xrm.Page.getAttribute("llaa_asian").setValue(selected);
}

function hispanic_onChange() {
    var selected = Xrm.Page.getAttribute("llaa_hispanicorlatino").getValue();
    Xrm.Page.getAttribute("llaa_latinolatina").setValue(selected);
}

//function mixedrace_onChange() {
//   var selected = Xrm.Page.getAttribute("llaa_mixedrace").getValue();
//   if (selected) {
//      enable_all_ethnicities(true);
//   }
//}

function doCheckboxDependency(bValue, fldName) {
    if (bValue) {
        makeFieldRequired(fldName);
    }
    else {
        clearAndMakeFieldOptional(fldName);
    }
}

function makeFieldRequired(fldname) {
    Xrm.Page.getAttribute(fldname).setRequiredLevel("required");
}

function makeFieldOptional(fldname) {
    Xrm.Page.getAttribute(fldname).setRequiredLevel("none");
}

function clearField(fldname) {
    Xrm.Page.getAttribute(fldname).setValue(null);
}

function clearAndMakeFieldOptional(fldname) {
    makeFieldOptional(fldname);
    clearField(fldname);
}
//just testing