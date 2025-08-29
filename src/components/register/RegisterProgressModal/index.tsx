import { useEffect, useCallback } from "react";
import { RequestProcessModal } from "../../modals/RequestProcessModal";
import { IRegisterProgressModal } from "./interface";
import { RegisterRequestWarning } from "@components/layout/RegisterRequestWarning";
import { useRegistrationProgress } from "@hooks/useRegistrationProgress";
import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { registerProgressModal } from "@config/register/modal/registerProgress";
import { useNavigate } from "react-router-dom";

const RegisterProgressModal = (props: IRegisterProgressModal) => {
  const { isMobile, registerParams, onModalClose } = props;
  
  const {
    registrationState,
    progressSteps,
    processRegistration,
  } = useRegistrationProgress();
  const navigate = useNavigate();

  const handleModalClose = useCallback(() => {
    onModalClose?.();
  }, [onModalClose]);

  const handleSuccessClose = useCallback(() => {
    onModalClose?.();
    navigate("/", { replace: true });
  }, [onModalClose, navigate]);

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
            onComplete={registrationState === ERegistrationState.SUCCESS ? handleSuccessClose : undefined}
          />
        );
      
      case ERegistrationState.ERROR:
        return (
          <RegisterRequestWarning
            isMobile={isMobile}
            onClose={handleModalClose}
            onConfirm={handleModalClose}
            originatorName={registerParams?.userData?.originatorName}
          />
        );
      
      default:
        return null;
    }
  };

  return renderModal();
};

export { RegisterProgressModal };
