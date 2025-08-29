interface IUsersConsentOfScopeAttribute {
  scopeConsentId: string;
  userAccountId: string;
  originatorCode: string;
  originatorName: string;
  attributeIncludedInConsent: string;
  dateOfConsent: string; // ISO date string
  transactionOperation: string;
}

export type { IUsersConsentOfScopeAttribute };

