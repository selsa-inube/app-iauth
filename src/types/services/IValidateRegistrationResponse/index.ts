
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
    registrationRedirectUrl: string;
}
export type { IValidateRegistrationResponse };
