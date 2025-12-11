interface IUseHomeValidation {
  originatorId?: string;
  callbackUrl?: string;
  applicationName?: string;
  state?: string;
  codeChallenge?: string;
  registerUrl?: string;
  hasMissingParams: boolean;
  isValidatingOriginator: boolean;
  hasOriginatorError: boolean;
}

export type { IUseHomeValidation };
