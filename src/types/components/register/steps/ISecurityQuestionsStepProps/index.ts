import type { IRegisterStepProps } from "@ptypes/components/register/IRegisterStepProps";
import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";

interface ISecurityQuestionsStepProps extends IRegisterStepProps {
  securityQuestions: ISecurityQuestionsResponse | null;
  minRequiredAnswers: number;
}

export type { ISecurityQuestionsStepProps };
