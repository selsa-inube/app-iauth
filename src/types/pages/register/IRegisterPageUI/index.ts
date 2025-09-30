import type { ITextSize } from "@ptypes/components/ITextSize";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IPasswordPolicy } from "@ptypes/hooks/usePasswordPolicy/IPasswordPolicy";
import type { IRegisterLabels } from "@ptypes/config/register/IRegisterLabels";
import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";

interface IRegisterPageUI {
  labelsSize: ITextSize;
  userData: UserData;
  isMobile: boolean;
  labels: IRegisterLabels;
  onRegisterSubmit: (formData: IRegisterFormData) => void;
  passwordPolicy: IPasswordPolicy | null;
  isPolicyLoading: boolean;
  securityQuestions: ISecurityQuestionsResponse | null;
}

export type { IRegisterPageUI };
