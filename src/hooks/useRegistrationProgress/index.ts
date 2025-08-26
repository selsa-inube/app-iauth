import { useState, useCallback, useMemo } from "react";
import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";
import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { IRequestSteps } from "@ptypes/components/requestSteps";
import { useRegisterUser } from "@hooks/useRegisterUser";
import { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";
import { IUseRegistrationProgress } from "@ptypes/hooks/useRegistrationProgress";
import { registerProgressModal } from "@config/register/modal/registerProgress";

const useRegistrationProgress = (): IUseRegistrationProgress => {
  const { registerUserSubmit } = useRegisterUser();

  const initialSteps = useMemo<IRequestSteps[]>(() => [
    { name: registerProgressModal.steps.sending, status: ERequestStepsStatus.PENDING },
    { name: registerProgressModal.steps.success, status: ERequestStepsStatus.PENDING },
  ], []);

  const [registrationState, setRegistrationState] = useState<ERegistrationState>(ERegistrationState.PROCESSING);
  const [progressSteps, setProgressSteps] = useState<IRequestSteps[]>(initialSteps);

  const updateStepsProgress = useCallback((firstStepStatus: ERequestStepsStatus, secondStepStatus: ERequestStepsStatus) => {
    setProgressSteps([
      { name: registerProgressModal.steps.sending, status: firstStepStatus },
      { name: registerProgressModal.steps.success, status: secondStepStatus },
    ]);
  }, []);

  const processRegistration = useCallback(async (params: IRegisterUserParams) => {
    try {
      setRegistrationState(ERegistrationState.PROCESSING);
      
      updateStepsProgress(ERequestStepsStatus.COMPLETED, ERequestStepsStatus.PENDING);

      const response = await registerUserSubmit(params);

      if (response.success) {
        updateStepsProgress(ERequestStepsStatus.COMPLETED, ERequestStepsStatus.COMPLETED);
        setRegistrationState(ERegistrationState.SUCCESS);
      } else {
        setRegistrationState(ERegistrationState.ERROR);
      }
    } catch (error) {
      updateStepsProgress(ERequestStepsStatus.ERROR, ERequestStepsStatus.PENDING);
      setRegistrationState(ERegistrationState.ERROR);
    }
  }, [registerUserSubmit, updateStepsProgress]);

  const resetRegistration = useCallback(() => {
    setRegistrationState(ERegistrationState.PROCESSING);
    setProgressSteps(initialSteps);
  }, [initialSteps]);

  return {
    registrationState,
    progressSteps,
    processRegistration,
    resetRegistration,
  };
};

export { useRegistrationProgress };
