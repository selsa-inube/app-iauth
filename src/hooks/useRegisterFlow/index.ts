import { useState, useCallback, useMemo } from "react";
import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";
import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { IRequestSteps } from "@ptypes/components/requestSteps";
import { registerProgressModal } from "@config/register/modal/registerProgress";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";
import { useRegisterUser } from "@hooks/useRegisterUser";

interface IUseRegisterFlow {
  isModalOpen: boolean;
  registrationState: ERegistrationState;
  progressSteps: IRequestSteps[];
  handleRegisterSubmit: (formData: IRegisterFormData) => Promise<void>;
  onModalClose: () => void;
}

const useRegisterFlow = (userData: UserData | undefined): IUseRegisterFlow => {
  const { registerUserSubmit } = useRegisterUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialSteps = useMemo<IRequestSteps[]>(() => [
    { name: registerProgressModal.steps.sending, status: ERequestStepsStatus.PENDING },
    { name: registerProgressModal.steps.success, status: ERequestStepsStatus.PENDING },
  ], []);

  const [registrationState, setRegistrationState] = useState<ERegistrationState>(ERegistrationState.PROCESSING);
  const [progressSteps, setProgressSteps] = useState<IRequestSteps[]>(initialSteps);

  const updateStepsProgress = useCallback((first: ERequestStepsStatus, second: ERequestStepsStatus) => {
    setProgressSteps([
      { name: registerProgressModal.steps.sending, status: first },
      { name: registerProgressModal.steps.success, status: second },
    ]);
  }, []);

  const handleRegisterSubmit = useCallback(async (formData: IRegisterFormData) => {
    if (!userData) return;

    setIsModalOpen(true);
    setRegistrationState(ERegistrationState.PROCESSING);
    updateStepsProgress(ERequestStepsStatus.PENDING, ERequestStepsStatus.PENDING);

    const params: IRegisterUserParams = { formData, userData };

    try {
      updateStepsProgress(ERequestStepsStatus.COMPLETED, ERequestStepsStatus.PENDING);
      const response = await registerUserSubmit(params);
      if (response.success) {
        updateStepsProgress(ERequestStepsStatus.COMPLETED, ERequestStepsStatus.COMPLETED);
        setRegistrationState(ERegistrationState.SUCCESS);
      } else {
        updateStepsProgress(ERequestStepsStatus.ERROR, ERequestStepsStatus.PENDING);
        setRegistrationState(ERegistrationState.ERROR);
      }
    } catch (error) {
      updateStepsProgress(ERequestStepsStatus.ERROR, ERequestStepsStatus.PENDING);
      setRegistrationState(ERegistrationState.ERROR);
    }
  }, [registerUserSubmit, updateStepsProgress, userData]);

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
    setRegistrationState(ERegistrationState.PROCESSING);
    setProgressSteps(initialSteps);
  }, [initialSteps]);

  return {
    isModalOpen,
    registrationState,
    progressSteps,
    handleRegisterSubmit,
    onModalClose,
  };
};

export { useRegisterFlow };
export type { IUseRegisterFlow };

