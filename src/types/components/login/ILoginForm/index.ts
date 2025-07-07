import type { FormEvent, ChangeEvent, ReactNode } from 'react';
import { IFormStepLabels } from '@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels';
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { TextSize } from '@ptypes/components/TextSize';

interface ILoginForm {
  currentStep: EFormStepLabels;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  labels: IFormStepLabels;
  inputValid: boolean | null;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  link?: ReactNode;
  screenMobile: string;
  labelsSize: TextSize;
  labelsSizeDifferent: TextSize;
  showLink: boolean;
}

export type { ILoginForm };