import type { FormEvent, ChangeEvent, ReactNode } from "react";
import { IFormStepLabels } from "@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { ITextSize } from "@ptypes/components/TextSize";

interface ILoginForm {
  currentStep: EFormStepLabels;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  labels: IFormStepLabels;
  inputValid: boolean | null;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  link?: ReactNode;
  screenMobile: string;
  labelsSize: ITextSize;
  labelsSizeDifferent: ITextSize;
  showLink: boolean;
}

export type { ILoginForm };
