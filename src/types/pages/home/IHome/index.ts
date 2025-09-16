interface IHome {
  originatorId?: string;
  applicationName?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
}

export type { IHome };
