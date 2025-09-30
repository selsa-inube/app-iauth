
interface IValidateRegistrationResponse {
    userManagementRequestsId: string;
    originatorCode: string;
    originatorName: string;
    consumerApplicationCode: string;
    lastNames: string;
    firstNames: string;
    biologicalSex?: string;
    identificationType: string;
    identificationNumber: string;
}
export type { IValidateRegistrationResponse };
