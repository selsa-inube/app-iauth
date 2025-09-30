import { IRequestSteps } from "@ptypes/components/requestSteps";

interface IRequestProcessModal {
  iconSize?: string;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  description: string;
  title: string;
  onComplete?: () => void;
}

export type { IRequestProcessModal };
