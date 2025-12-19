import type { IUsersConsentOfScopeAttribute } from "@ptypes/services/IUsersConsentOfScopeAttribute";
import type { IUserAccountAuthenticationMethodResponse } from "@ptypes/services/IUserAccountAuthenticationMethodResponse";
import type { IAccountNumberPerMessageOperatorResponse } from "@ptypes/services/IAccountNumberPerMessageOperatorResponse";

interface ISaveUserAccountResponse {
  userAccountId?: string;
  userAccount?: string;
  accountName?: string;
  names?: string;
  surnames?: string;
  biologicalSex?: string;
  email?: string;
  userPhoneNumber?: string;
  identificationType?: string;
  identificationNumber?: string;
  userAccountCreationDate?: string;
  userAccountStatus?: string;
  mainOriginatorCode?: string;
  mainOriginatorName?: string;
  dateOfTheLastBlock?: string;
  usersConsentOfScopeAttributes?: IUsersConsentOfScopeAttribute[];
  userAccountAuthenticationMethods?: IUserAccountAuthenticationMethodResponse[];
  accountNumberPerMessageOperators?: IAccountNumberPerMessageOperatorResponse[];
  securityQuestions?: any;
}

export type { ISaveUserAccountResponse };
