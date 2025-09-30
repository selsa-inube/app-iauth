import type { ISecurityQuestion } from "@ptypes/api/ISecurityQuestion";

interface ISecurityQuestionsResponse {
  SecurityQuestionAndAnswer: ISecurityQuestion[];
}

export type { ISecurityQuestionsResponse };
