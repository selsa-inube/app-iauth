import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy";

interface IRegisterStepProps {
  formData: IRegisterFormData;
  onFormChange: <K extends keyof IRegisterFormData>(
    field: K,
    value: IRegisterFormData[K],
  ) => void;
  labels: IRegisterStepLabels;
  onNextEnabledChange?: (enabled: boolean) => void;
  passwordPolicy?: IPasswordPolicy | null;
  isPolicyLoading?: boolean;
}

export type { IRegisterStepProps };
