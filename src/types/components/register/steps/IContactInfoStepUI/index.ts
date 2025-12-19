import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { CountryOption } from "@components/form/PhoneNumberField/types";

interface IContactInfoStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (value: string) => void;
  onPhoneCountryChange: (country: CountryOption) => void;
  onWhatsappToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWhatsappPhoneChange?: (value: string) => void;
  onWhatsappPhoneCountryChange?: (country: CountryOption) => void;
  isMobile?: boolean;
  errors?: {
    email: string;
    phone: string;
    whatsappPhone: string;
  };
}

export type { IContactInfoStepUI };
