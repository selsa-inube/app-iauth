import type { IRegisterStep } from "@ptypes/components/register/IRegisterStepProps";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy";

interface IPasswordStep extends IRegisterStep {
  passwordPolicy?: IPasswordPolicy | null;
  isPolicyLoading?: boolean;
}

export type { IPasswordStep };
