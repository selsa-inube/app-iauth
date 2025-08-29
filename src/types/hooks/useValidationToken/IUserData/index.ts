interface UserData {
  identificationType: string;
  identificationNumber: string;
  firstNames: string;
  lastNames: string;
  originatorId?: string;
  originatorCode: string;
  originatorName: string;
  consumerApplicationCode: string;
  userManagementRequestsId: string;
}

export type { UserData };
