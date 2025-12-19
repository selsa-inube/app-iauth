import { IAuthParams } from "@ptypes/hooks/useAuthParams/IAuthParams";

interface IHome extends IAuthParams {
  modalInformation?: {
    showModal?: boolean;
    title?: string;
    content?: string;
  };
}

export type { IHome };
