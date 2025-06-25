import { IFormStepLabels } from "@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels";
import { IValidate } from "@ptypes/api/IValidations";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";

interface IStepValidationConfig {
    labelsObject: IFormStepLabels;
    validationFn: (valueOne: string, valueTwo?: string | undefined) => Promise<IValidate> | Promise<IValidate>;
    errorMessage: string;
    nextStep: EFormStepLabels;
    onSuccess: () => void;
};

export type { IStepValidationConfig };