import type { IRegisterStepProps } from "@ptypes/components/register/IRegisterStepProps";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy";

interface IPasswordStepProps extends IRegisterStepProps {
  passwordPolicy?: IPasswordPolicy | null;
  isPolicyLoading?: boolean;
}

export type { IPasswordStepProps };
