import { IFormStepLabels } from '@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels';
import type { ReactNode } from 'react';
import { InputStatus } from '@ptypes/components/InputStatus';
import { TextSize } from '@ptypes/components/TextSize';

interface IDynamicInputs {
    labels: IFormStepLabels,
    inputValid: boolean | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    currentStep: string,
    icon?: ReactNode,
    status?: InputStatus,
    message?: string,
    labelsSize: TextSize,
    showUserIcon: boolean
};

export type { IDynamicInputs };