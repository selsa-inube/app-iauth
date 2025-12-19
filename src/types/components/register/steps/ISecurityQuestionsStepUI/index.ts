import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";

interface ISecurityQuestionsStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  securityQuestions: ISecurityQuestionsResponse | null;
  onAnswerChange: (questionNumber: string, value: string) => void;
  isMobile?: boolean;
  minRequiredAnswers: number;
}

export type { ISecurityQuestionsStepUI };
