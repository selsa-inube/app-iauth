import type { ISecurityQuestionApiItem } from "@ptypes/services/ISecurityQuestionApiItem";

interface ISecurityQuestionsApiResponse {
  SecurityQuestionAndAnswer: ISecurityQuestionApiItem[];
}

export type { ISecurityQuestionsApiResponse };

