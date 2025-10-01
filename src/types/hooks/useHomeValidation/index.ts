interface IUseHomeValidation {
  originatorId?: string;
  callbackUrl?: string;
  applicationName?: string;
  hasMissingParams: boolean;
  isValidatingOriginator: boolean;
  hasOriginatorError: boolean;
}

export type { IUseHomeValidation };
