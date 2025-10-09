interface IOriginatorInstitutionalMessage {
  institutionalMessageId: string;
  originatorCode: string;
  originatorName: string;
  messageValidFrom: string; // ISO date string
  messageValidUntil: string; // ISO date string
  institutionalMessage: string;
}

export type { IOriginatorInstitutionalMessage };
