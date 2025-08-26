import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";

interface IRegistrationStep {
  name: string;
  status: ERequestStepsStatus;
}

export type { IRegistrationStep };
