interface IValidateParams {
  password?: string;
  username?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
}

export type { IValidateParams };
