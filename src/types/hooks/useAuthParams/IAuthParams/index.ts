interface IAuthParams {
  originatorId?: string;
  applicationName?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
  registerUrl?: string;
  returnTo?: string;
}

export type { IAuthParams };
