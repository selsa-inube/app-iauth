import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IContactInfoStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWhatsappToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IContactInfoStepUI };
