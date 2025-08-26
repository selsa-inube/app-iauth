import { useEffect, useCallback } from "react";
import { RequestProcessModal } from "../../modals/RequestProcessModal";
import { IRegisterProgressModal } from "./interface";
import { RegisterRequestWarning } from "@components/layout/RegisterRequestWarning";
import { useRegistrationProgress } from "@hooks/useRegistrationProgress";
import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { registerProgressModal } from "@config/register/modal/registerProgress";

const RegisterProgressModal = (props: IRegisterProgressModal) => {
  const { isMobile, registerParams, onModalClose } = props;
  
  const {
    registrationState,
    progressSteps,
    processRegistration,
  } = useRegistrationProgress();

  const handleModalClose = useCallback(() => {
    onModalClose?.();
  }, [onModalClose]);

  useEffect(() => {
    processRegistration(registerParams);
  }, [processRegistration, registerParams]);

  const renderModal = () => {
    switch (registrationState) {
      case ERegistrationState.PROCESSING:
      case ERegistrationState.SUCCESS:
        return (
          <RequestProcessModal
            requestSteps={progressSteps}
            isMobile={isMobile}
            title={registerProgressModal.title}
            description={registerProgressModal.description}
            onComplete={registrationState === ERegistrationState.SUCCESS ? handleModalClose : undefined}
          />
        );
      
      case ERegistrationState.ERROR:
        return (
          <RegisterRequestWarning
            isMobile={isMobile}
            onClose={handleModalClose}
            onConfirm={handleModalClose}
          />
        );
      
      default:
        return null;
    }
  };

  return renderModal();
};

export { RegisterProgressModal };
