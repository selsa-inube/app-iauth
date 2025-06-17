import type { FormEvent, ChangeEvent, ReactNode } from 'react';
import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels';
import { IFormStep } from '@ptypes/hooks/IStepValidationConfig';
import { TextSize } from '@ptypes/components/TextSize';

interface ILoginFormProps {
  currentStep: IFormStep;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  labels: IFormStepLabels;
  inputValid: boolean | null;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  link?: ReactNode;
  screenMobile: string;
  labelsSize: TextSize;
  labelsSizeDiferent: TextSize;
  showLink: boolean;
}

export type { ILoginFormProps };