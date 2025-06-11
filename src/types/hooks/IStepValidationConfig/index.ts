import { IFormStepLabels } from "@ptypes/hooks/IFormStepLabels";
import { IValidatePassword } from "@ptypes/api/IValidatePassword";
import { IValidateUsername } from "@ptypes/api/IValidateUsername";

type IFormStep = 'usernameInput' | 'passwordInput' | 'loginSuccess';

interface IStepValidationConfig {
    labelsObject: IFormStepLabels;
    validationFn: (valueOne: string, valueTwo?: string | undefined) => Promise<IValidatePassword> | Promise<IValidateUsername>;
    errorMessage: string;
    nextStep: IFormStep;
    onSuccess: () => void;
};

export type { IStepValidationConfig, IFormStep };