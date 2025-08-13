import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface ISecurityQuestionsStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onSecurityQuestion1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSecurityQuestion2Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSecurityQuestion3Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReligionChange: (name: string, value: string) => void;
  onBirthplaceChange: (name: string, value: string) => void;
}

export type { ISecurityQuestionsStepUI };
