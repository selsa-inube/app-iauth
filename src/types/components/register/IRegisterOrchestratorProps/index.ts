import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy";
import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

interface IRegisterOrchestrator {
  labelsSize: "small" | "medium" | "large";
  isMobile?: boolean;
  labels: IRegisterStepLabels;
  userData: UserData;
  onSubmit: (data: IRegisterFormData) => void;
  originatorId?: string;
  originatorCode?: string;
  passwordPolicy: IPasswordPolicy | null;
  isPolicyLoading: boolean;
  securityQuestions: ISecurityQuestionsResponse | null;
}

export type { IRegisterOrchestrator };
