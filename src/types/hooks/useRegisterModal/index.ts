import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";

interface IUseRegisterModal {
  isModalOpen: boolean;
  formData: IRegisterFormData | null;
  registerParams: IRegisterUserParams | null;
  openModal: (formData: IRegisterFormData) => void;
  closeModal: () => void;
}

export type { IUseRegisterModal };
