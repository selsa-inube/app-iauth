import type { IRegisterStep } from "@ptypes/components/register/IRegisterStepProps";
import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";

interface ISecurityQuestionsStep extends IRegisterStep {
  securityQuestions: ISecurityQuestionsResponse | null;
  minRequiredAnswers: number;
}

export type { ISecurityQuestionsStep };
