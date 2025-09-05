import type { IRequestSteps } from "@ptypes/components/requestSteps";
import type { ERegistrationState } from "@enum/hooks/ERegistrationState";

interface IRegisterProgressModal {
  isMobile: boolean;
  registrationState: ERegistrationState | string;
  progressSteps: IRequestSteps[];
  onModalClose?: () => void;
  originatorName?: string;
}

export type { IRegisterProgressModal };
