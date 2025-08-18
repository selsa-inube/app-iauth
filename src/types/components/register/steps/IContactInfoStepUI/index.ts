import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IContactInfoStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (value: string) => void;
  onPhoneCountryChange: (countryCode: string) => void;
  onWhatsappToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWhatsappPhoneChange?: (value: string) => void;
  onWhatsappPhoneCountryChange?: (countryCode: string) => void;
  isMobile?: boolean;
  errors?: {
    email: string;
    phone: string;
    whatsappPhone: string;
  };
}

export type { IContactInfoStepUI };
