interface IHome {
  originatorId?: string;
  applicationName?: string;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
  registerUrl?: string;
  modalInformation?: {
    showModal?: boolean;
    title?: string;
    content?: string;
  };
}

export type { IHome };
