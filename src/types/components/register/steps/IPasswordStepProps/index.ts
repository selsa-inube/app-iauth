import type { IRegisterStep } from "@ptypes/components/register/IRegisterStepProps";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy/IPasswordPolicy";

interface IPasswordStep extends IRegisterStep {
  passwordPolicy?: IPasswordPolicy | null;
  isPolicyLoading?: boolean;
}

export type { IPasswordStep };
