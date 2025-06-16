import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels';
import type { FormEvent, ChangeEvent, ReactNode } from 'react';
import { IFormStep } from '@ptypes/hooks/IStepValidationConfig';
import { IInput, IText } from '@inubekit/inubekit';

type InputStatus = IInput['status'];

type TextSize = IText['size'];

interface IDynamicInputs {
    labels: IFormStepLabels,
    inputValid: boolean | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    currentStep: string,
    icon?: ReactNode,
    status?: InputStatus,
    message?: string,
    labelsSize: TextSize
};

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
}

export type { IDynamicInputs, ILoginFormProps, InputStatus, TextSize };