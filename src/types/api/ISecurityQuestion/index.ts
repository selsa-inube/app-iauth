import type { ISecurityQuestionAnswer } from "@ptypes/api/ISecurityQuestionAnswer";

interface ISecurityQuestion {
  numberQuestion: string;
  question: string;
  idiom: string;
  answers?: ISecurityQuestionAnswer[];
}

export type { ISecurityQuestion };
