import { IRequestSteps } from "@ptypes/components/requestSteps";
import { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";

interface IUseRegistrationProgress {
  registrationState: string;
  progressSteps: IRequestSteps[];
  processRegistration: (params: IRegisterUserParams) => Promise<void>;
  resetRegistration: () => void;
}

export type { IUseRegistrationProgress };
