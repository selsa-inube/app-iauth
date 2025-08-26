import { IRequestSteps } from "@ptypes/components/requestSteps";

interface IRequestProcessDesktop {
  requestSteps: IRequestSteps[];
  iconSize: string;
  stepCurrent: number;
  stepCurrentIndex: number;
}

export type { IRequestProcessDesktop };
