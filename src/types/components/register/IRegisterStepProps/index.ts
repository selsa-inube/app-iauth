import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IRegisterStepProps {
  formData: IRegisterFormData;
  onFormChange: <K extends keyof IRegisterFormData>(
    field: K,
    value: IRegisterFormData[K],
  ) => void;
  labels: IRegisterStepLabels;
  onNextEnabledChange?: (enabled: boolean) => void;
  isMobile?: boolean;
}

export type { IRegisterStepProps };
