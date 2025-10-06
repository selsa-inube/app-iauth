import type { ISecurityQuestionAnswer } from "@ptypes/services/ISecurityQuestionAnswer";
import type { IUserAccountAuthenticationMethod } from "@ptypes/services/IUserAccountAuthenticationMethod";
import type { IUserConsentOfScopeAttribute } from "@ptypes/services/IUserConsentOfScopeAttribute";
import type { IAccountNumberPerMessageOperator } from "@ptypes/services/IAccountNumberPerMessageOperator";

interface ISaveUserAccountRequest {
  userManagementRequestsId: string;
  accountName: string;
  email: string;
  identificationNumber: string;
  identificationType: string;
  names: string;
  surnames: string;
  userAccount: string;
  userPhoneNumber: string;
  consumerApplicationCode: string;
  mainOriginatorCode: string;
  securityQuestions?: ISecurityQuestionAnswer[];
  userAccountAuthenticationMethod: IUserAccountAuthenticationMethod;
  userConsentOfScopeAttribute: IUserConsentOfScopeAttribute;
  accountNumberPerMessageOperator: IAccountNumberPerMessageOperator;
  userManagementRequestsIdEncrypt: string;
  SafetyPhrase: string;
}

export type { ISaveUserAccountRequest };
