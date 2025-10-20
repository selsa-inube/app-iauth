interface IHome {
  originatorId?: string;
  applicationName?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
  modalInformation?: {
    showModal?: boolean;
    title?: string;
    content?: string;
  };
}

export type { IHome };
