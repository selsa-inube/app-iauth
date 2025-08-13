import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IAccountStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldStatus: "pending" | "invalid";
  validationMessage: string;
}

export type { IAccountStepUI };
