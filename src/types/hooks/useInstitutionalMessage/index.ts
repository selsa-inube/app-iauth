interface IUseInstitutionalMessage {
  modalInformation?: {
    showModal?: boolean;
    title?: string;
    content?: string;
  };
  loading: boolean;
}

export type { IUseInstitutionalMessage };
