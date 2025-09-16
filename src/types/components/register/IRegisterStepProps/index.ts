import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

interface IRegisterStep {
  formData: IRegisterFormData;
  onFormChange: <K extends keyof IRegisterFormData>(
    field: K,
    value: IRegisterFormData[K],
  ) => void;
  labels: IRegisterStepLabels;
  userData: UserData;
  onNextEnabledChange?: (enabled: boolean) => void;
  isMobile?: boolean;
}

export type { IRegisterStep };
