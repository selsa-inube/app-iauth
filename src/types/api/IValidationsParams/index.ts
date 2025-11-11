interface IValidateParams {
  password?: string;
  username?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
  applicationName?: string;
}

export type { IValidateParams };
