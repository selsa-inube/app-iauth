import { IFormStepLabels } from "@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels";
import { IValidatePassword } from "@ptypes/api/validatePassword/IValidatePassword";
import { IValidateUsername } from "@ptypes/api/validateUsername/IValidateUsername";

type IFormStep = 'usernameInput' | 'passwordInput' | 'loginSuccess';

interface IStepValidationConfig {
    labelsObject: IFormStepLabels;
    validationFn: (valueOne: string, valueTwo?: string | undefined) => Promise<IValidatePassword> | Promise<IValidateUsername>;
    errorMessage: string;
    nextStep: IFormStep;
    onSuccess: () => void;
};

export type { IStepValidationConfig, IFormStep };