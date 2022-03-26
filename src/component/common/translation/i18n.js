import i18n from "i18next";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

import TranslationHeaderEN from "../locales/en/layout/header/TranslationHeader.json";
import TranslationEmployeeEN from "../locales/en/employee/TranslationEmployee.json";
import TranslationAccountEN from "../locales/en/account/TranslationAccount.json";
import TranslationStoreEN from "../locales/en/store/TranslationStore.json";
import TranslationBenefitEN from "../locales/en/benefit/TranslationBenefit.json";
import TranslationContractEN from "../locales/en/contract/TranslationContract.json";
import TranslationInformationEN from "../locales/en/layout/header/TranslationInformation.json";
import TranslationToolBarEN from "../locales/en/layout/content/TranslationToolBar.json";
import TranslationSettingEN from "../locales/en/layout/sider/TranslationSetting.json";
import TranslationBreadCrumbEN from "../locales/en/layout/header/TranslationBreadCrumb.json";
import TranslationSearchBarEN from "../locales/en/layout/content/TranslationSearchBar.json";
import TranslationDepartmentEN from "../locales/en/department/TranslationDepartment.json";
import TranslationSalaryEN from "../locales/en/contract/TranslationSalary.json";
import TranslationPaginationEN from "../locales/en/common/TranslationPagination.json";
import TranslationPathnameEN from "../locales/en/layout/header/TranslationPathname.json";
import TranslationReasonEN from "../locales/en/reason/TranslationReason.json";
import TranslationDataItemPositionEN from "../locales/en/data-item/TranslationDataItemPosition.json";
import TranslationDataItemEN from "../locales/en/data-item/TranslationDataItem.json"
import TranslationCommonEN from "../locales/en/common/TranslationCommon.json"
import TranslationShiftEN from "../locales/en/timekeeping/TranslationShift.json";
import TranslationShiftWorkEN from "../locales/en/timekeeping/TranslationShiftWork.json";
import TranslationHolidayEN from "../locales/en/timekeeping/TranslationHoliday.json";
import TranslationEmployeeContractEN from "../locales/en/employee/TranslationEmployeeContract.json";
import TranslationDepartmentPemEN from "../locales/en/pem/TranslationDepartmentPem.json";
import TranslationEmployeePemEN from "../locales/en/pem/TranslationEmployeePem.json";
import TranslationStorePemEN from "../locales/en/pem/TranslationStorePem.json";
import TranslationAccountPemEN from "../locales/en/pem/TranslationAccountPem.json";
import TranslationPemHeaderEN from "../locales/en/pem/header/TranslationPemHeader.json";
import TranslationReasonPemEN from "../locales/en/pem/TranslationReasonPem.json";
import TranslationContractPemEN from "../locales/en/pem/TranslationContractPem.json";
import TranslationShiftPemEN from "../locales/en/pem/TranslationShiftPem.json";
import TranslationAdminPemEN from "../locales/en/pem/TranslationAdminPem.json";
import TranslationPersonnelPemEN from "../locales/en/pem/TranslationPersonnelPem.json";
import TranslationTimeEngineEN from "../locales/en/timekeeping/TranslationTimeEngine.json";
import TranslationLeaveEN from "../locales/en/leave-setting/TranslationLeave.json";
import TranslationTimeOffEN from "../locales/en/dossier/TranslationTimeOff.json";
import TranslationDossierEN from "../locales/en/dossier/TranslationDossier.json";
import TranslationMediaFileEN from "../locales/en/media-file/TranslationMediaFIle.json";
import TranslationEmployeeContractPemEN from "../locales/en/pem/TranslationEmployeeContractPem.json";
import TranslationTimeOffPemEN from "../locales/en/pem/dossier/TranslationTimeOffPem.json";
import TranslationReasonCheckInCheckOutEN from "../locales/en/reason/TranslationReasonCheckInCheckOut.json"
import TranslationTimeKeepingEN from "../locales/en/timekeeping/TranslationTimeKeeping.json";
import TranslationReasonWorkingEN from "../locales/en/reason/TranslationReasonWorking.json"
import TranslationBusinessFeeEN from "../locales/en/reason/TranslationBusinessFee.json"
import TranslationReasonRegimeEN from "../locales/en/reason/TranslationReasonRegime.json"
import TranslationReasonAbsentEN from "../locales/en/reason/TranslationReasonAbsent.json"
import TranslationWorkApplicationPemEn from "../locales/en/pem/dossier/TranslationWorkApplicationPem.json";
import TranslationWorkApplicationEn from "../locales/en/dossier/TranslationWorkApplication.json";
import TranslationSingleDoModeEn from "../locales/en/dossier/TranslationSingleDoMode.json"
import TranslationTimeAddEN from "../locales/en/dossier/TranslationTimeAdd.json"
import TranslationAssetEN from "../locales/en/asset/TranslationAsset.json";
import TranslationAssetCategoryEN from '../locales/en/asset/TranslationAssetCate.json';
import TranslationDossierBodyEN from "../locales/en/pem/dossier/TranslationDossierBody.json"
import TranslationCommentEN from "../locales/en/TranslationComment.json"


import TranslationHeaderVI from "../locales/vi/layout/header/TranslationHeader.json";
import TranslationEmployeeVI from "../locales/vi/employee/TranslationEmployee.json";
import TranslationAccountVI from "../locales/vi/account/TranslationAccount.json";
import TranslationStoreVI from "../locales/vi/store/TranslationStore.json";
import TranslationBenefitVI from "../locales/vi/benefit/TranslationBenefit.json";
import TranslationContractVI from "../locales/vi/contract/TranslationContract.json";
import TranslationInformationVI from "../locales/vi/layout/header/TranslationInformation.json";
import TranslationToolBarVI from "../locales/vi/layout/content/TranslationToolBar.json";
import TranslationSettingVI from "../locales/vi/layout/sider/TranslationSetting.json";
import TranslationBreadCrumbVI from "../locales/vi/layout/header/TranslationBreadCrumb.json";
import TranslationSearchBarVI from "../locales/vi/layout/content/TranslationSearchBar.json";
import TranslationDepartmentVI from "../locales/vi/department/TranslationDepartment.json";
import TranslationSalaryVI from "../locales/vi/contract/TranslationSalary.json";
import TranslationPaginationVI from "../locales/vi/common/TranslationPagination.json";
import TranslationPathnameVI from "../locales/vi/layout/header/TranslationPathname.json";
import TranslationReasonVI from "../locales/vi/reason/TranslationReason.json";
import TranslationShiftVI from "../locales/vi/timekeeping/TranslationShift.json";
import TranslationDataItemPositionVI from "../locales/vi/data-item/TranslationDataItemPosition.json"
import TranslationDataItemVI from "../locales/vi/data-item/TranslationDataItem.json"
import TranslationCommonVI from "../locales/vi/common/TranslationCommon.json"
import TranslationHolidayVI from "../locales/vi/timekeeping/TranslationHoliday.json"
import TranslationDossierVI from "../locales/vi/dossier/TranslationDossier.json"
import TranslationReasonCheckInCheckOutVI from "../locales/vi/reason/TranslationReasonCheckInCheckOut.json"
import TranslationShiftWorkVI from "../locales/vi/timekeeping/TranslationShiftWork.json";
import TranslationEmployeeContractVI from "../locales/vi/employee/TranslationEmployeeContract.json";
import TranslationDepartmentPemVI from "../locales/vi/pem/TranslationDepartmentPem.json"
import TranslationEmployeePemVI from "../locales/vi/pem/TranslationEmployeePem.json"
import TranslationStorePemVI from "../locales/vi/pem/TranslationStorePem.json"
import TranslationAccountPemVI from "../locales/vi/pem/TranslationAccountPem.json"
import TranslationReasonPemVI from "../locales/vi/pem/TranslationReasonPem.json"
import TranslationContractPemVI from "../locales/vi/pem/TranslationContractPem.json"
import TranslationShiftPemVI from "../locales/vi/pem/TranslationShiftPem.json"
import TranslationPemHeaderVI from "../locales/vi/pem/header/TranslationPemHeader.json"
import TranslationAdminPemVI from "../locales/vi/pem/TranslationAdminPem.json"
import TranslationPersonnelPemVI from "../locales/vi/pem/TranslationPersonnelPem.json"
import TranslationTimeEngineVI from "../locales/vi/timekeeping/TranslationTimeEngine.json"
import TranslationLeaveVI from "../locales/vi/leave-setting/TranslationLeave.json"
import TranslationTimeOffVI from "../locales/vi/dossier/TranslationTimeOff.json"
import TranslationMediaFileVI from "../locales/vi/media-file/TranslationMediaFIle.json";
import TranslationEmployeeContractPemVI from "../locales/vi/pem/TranslationEmployeeContractPem.json";
import TranslationTimeOffPemVI from "../locales/vi/pem/dossier/TranslationTimeOffPem.json";
import TranslationReasonRegimeVI from "../locales/vi/reason/TranslationReasonRegime.json"
import TranslationReasonAbsentVI from "../locales/vi/reason/TranslationReasonAbsent.json"

import TranslationTimeKeepingVI from "../locales/vi/timekeeping/TranslationTimeKeeping.json"
import TranslationReasonWorkingVI from "../locales/vi/reason/TranslationReasonWorking.json"
import TranslationBusinessFeeVI from "../locales/vi/reason/TranslationBusinessFee.json"
import TranslationWorkApplicationPemVi from "../locales/vi/pem/dossier/TranslationWorkApplicationPem.json";
import TranslationWorkApplicationVi from "../locales/vi/dossier/TranslationWorkApplication.json";
import TranslationSingleDoModeVI from "../locales/vi/dossier/TranslationSingleDoMode.json"
import TranslationTimeAddVI from "../locales/vi/dossier/TranslationTimeAdd.json"
import TranslationAssetVI from "../locales/vi/asset/TranslationAsset.json";
import TranslationAssetCategoryVI from '../locales/vi/asset/TranslationAssetCate.json';
import TranslationDossierBodyVI from "../locales/vi/pem/dossier/TranslationDossierBody.json"
import TranslationCommentVI from "../locales/vi/TranslationComment.json"


// the translations
const resources = {
    en: {
        translation: {
            ...TranslationHeaderEN,
            ...TranslationEmployeeEN,
            ...TranslationAccountEN,
            ...TranslationStoreEN,
            ...TranslationBenefitEN,
            ...TranslationContractEN,
            ...TranslationInformationEN,
            ...TranslationToolBarEN,
            ...TranslationSettingEN,
            ...TranslationBreadCrumbEN,
            ...TranslationSearchBarEN,
            ...TranslationDepartmentEN,
            ...TranslationSalaryEN,
            ...TranslationPaginationEN,
            ...TranslationPathnameEN,
            ...TranslationReasonEN,
            ...TranslationDataItemPositionEN,
            ...TranslationDataItemEN,
            ...TranslationCommonEN,
            ...TranslationShiftEN,
            ...TranslationHolidayEN,
            ...TranslationShiftWorkEN,
            ...TranslationEmployeeContractEN,
            ...TranslationDepartmentPemEN,
            ...TranslationEmployeePemEN,
            ...TranslationStorePemEN,
            ...TranslationAccountPemEN,
            ...TranslationReasonPemEN,
            ...TranslationContractPemEN,
            ...TranslationShiftPemEN,
            ...TranslationPemHeaderEN,
            ...TranslationAdminPemEN,
            ...TranslationPersonnelPemEN,
            ...TranslationTimeEngineEN,
            ...TranslationLeaveEN,
            ...TranslationTimeOffEN,
            ...TranslationDossierEN,
            ...TranslationMediaFileEN,
            ...TranslationEmployeeContractPemEN,
            ...TranslationTimeOffPemEN,
            ...TranslationReasonCheckInCheckOutEN,
            ...TranslationTimeOffPemEN,
            ...TranslationTimeKeepingEN,
            ...TranslationBusinessFeeEN,
			...TranslationReasonRegimeEN,
            ...TranslationReasonAbsentEN,
			...TranslationReasonRegimeEN,
            ...TranslationReasonWorkingEN,
            ...TranslationWorkApplicationPemEn,
            ...TranslationWorkApplicationEn,
            ...TranslationSingleDoModeEn,
            ...TranslationTimeAddEN,
            ...TranslationAssetEN,
            ...TranslationAssetCategoryEN,
            ...TranslationTimeAddEN,
            ...TranslationDossierBodyEN,
            ...TranslationCommentEN
        },
    },
    vi: {
        translation: {
            ...TranslationHeaderVI,
            ...TranslationEmployeeVI,
            ...TranslationAccountVI,
            ...TranslationStoreVI,
            ...TranslationBenefitVI,
            ...TranslationContractVI,
            ...TranslationInformationVI,
            ...TranslationToolBarVI,
            ...TranslationSettingVI,
            ...TranslationBreadCrumbVI,
            ...TranslationSearchBarVI,
            ...TranslationDepartmentVI,
            ...TranslationSalaryVI,
            ...TranslationPaginationVI,
            ...TranslationPathnameVI,
            ...TranslationReasonVI,
            ...TranslationDataItemPositionVI,
            ...TranslationDataItemVI,
            ...TranslationCommonVI,
            ...TranslationShiftVI,
            ...TranslationHolidayVI,
            ...TranslationShiftWorkVI,
            ...TranslationEmployeeContractVI,
            ...TranslationDepartmentPemVI,
            ...TranslationEmployeePemVI,
            ...TranslationStorePemVI,
            ...TranslationAccountPemVI,
            ...TranslationPemHeaderVI,
            ...TranslationReasonPemVI,
            ...TranslationContractPemVI,
            ...TranslationShiftPemVI,
            ...TranslationAdminPemVI,
            ...TranslationPersonnelPemVI,
            ...TranslationTimeEngineVI,
            ...TranslationLeaveVI,
            ...TranslationTimeOffVI,
            ...TranslationDossierVI,
            ...TranslationMediaFileVI,
            ...TranslationEmployeeContractPemVI,
            ...TranslationTimeOffPemVI,
            ...TranslationReasonCheckInCheckOutVI,
            ...TranslationTimeOffPemVI,
            ...TranslationTimeKeepingVI,
            ...TranslationBusinessFeeVI,
			...TranslationReasonRegimeVI,
            ...TranslationReasonAbsentVI,
			...TranslationReasonRegimeVI,
            ...TranslationReasonWorkingVI,
            ...TranslationWorkApplicationPemVi,
            ...TranslationWorkApplicationVi,
            ...TranslationSingleDoModeVI,
            ...TranslationTimeAddVI,
            ...TranslationAssetVI,
            ...TranslationAssetCategoryVI,
            ...TranslationTimeAddVI,
            ...TranslationDossierBodyVI,
            ...TranslationCommentVI
        },
    },
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "vi",
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
