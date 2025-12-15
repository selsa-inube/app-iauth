interface IAuthenticateBySessionParams {
  state: string;
  callbackUrl: string;
  codeChallenge: string;
}

export type { IAuthenticateBySessionParams };
