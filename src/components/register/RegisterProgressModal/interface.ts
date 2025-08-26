import { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";

interface IRegisterProgressModal {
  isMobile: boolean;
  registerParams: IRegisterUserParams;
  onModalClose?: () => void;
}

export type { IRegisterProgressModal };
