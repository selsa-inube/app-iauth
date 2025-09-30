import { IRequestSteps } from "../requestSteps";

interface IRequestProcessDesktop {
  requestSteps: IRequestSteps[];
  iconSize: string;
  stepCurrent: number;
  stepCurrentIndex: number;
}

export type { IRequestProcessDesktop };
