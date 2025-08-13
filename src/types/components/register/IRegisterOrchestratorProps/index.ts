import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy";

interface IRegisterOrchestratorProps {
  labelsSize: "small" | "medium" | "large";
  isMobile?: boolean;
  labels: IRegisterStepLabels;
  onSubmit: (data: IRegisterFormData) => void;
  originatorId?: string;
  originatorCode?: string;
  passwordPolicy: IPasswordPolicy | null;
  isPolicyLoading: boolean;
}

export type { IRegisterOrchestratorProps };
