import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";

interface ISecurityImageStepUI {
  labels: IRegisterStepLabels;
  formData: IRegisterFormData;
  onPhraseChange?: (value: string) => void;
}

export type { ISecurityImageStepUI };
