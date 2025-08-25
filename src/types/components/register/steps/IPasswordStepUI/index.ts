import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IPasswordStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordStatus: "pending" | "invalid";
  confirmPasswordStatus: "pending" | "invalid";
  validationMessage: string;
  confirmPasswordMessage: string;
  dynamicRequirements: string[];
  isLoading: boolean;
}

export type { IPasswordStepUI };
