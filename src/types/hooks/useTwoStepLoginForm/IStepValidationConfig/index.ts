import { IFormStepLabels } from "@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels";
import { IValidate } from "@ptypes/api/IValidations";
import { IFormStep } from "@ptypes/hooks/useTwoStepLoginForm/IFormStep";

interface IStepValidationConfig {
    labelsObject: IFormStepLabels;
    validationFn: (valueOne: string, valueTwo?: string | undefined) => Promise<IValidate> | Promise<IValidate>;
    errorMessage: string;
    nextStep: IFormStep;
    onSuccess: () => void;
};

export type { IStepValidationConfig, IFormStep };