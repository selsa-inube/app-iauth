import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";

interface IRequestSteps {
  name: string;
  status: ERequestStepsStatus;
  statusRequest?: string;
}

export type { IRequestSteps };
