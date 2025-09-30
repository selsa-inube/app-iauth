import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { IRequestSteps } from "@ptypes/components/requestSteps";

interface IUseRegisterFlow {
  isModalOpen: boolean;
  registrationState: ERegistrationState;
  progressSteps: IRequestSteps[];
  handleRegisterSubmit: (formData: IRegisterFormData) => Promise<void>;
  onModalClose: () => void;
}
export type { IUseRegisterFlow };