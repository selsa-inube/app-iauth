import type { ISecurityQuestionApiAnswer } from "@ptypes/services/ISecurityQuestionApiAnswer";

interface ISecurityQuestionApiItem {
  numberQuestion: string;
  question: string;
  i18n?: Record<string, string>;
  answers?: ISecurityQuestionApiAnswer[];
}

export type { ISecurityQuestionApiItem };

