import { useCallback } from "react";
import { RequestProcessModal } from "../../modals/RequestProcessModal";
import { IRegisterProgressModal } from "./interface";
import { RegisterRequestWarning } from "@components/layout/RegisterRequestWarning";
import { ERegistrationState } from "@enum/hooks/ERegistrationState";
import { registerProgressModal } from "@config/register/modal/registerProgress";
import { useNavigate } from "react-router-dom";

const RegisterProgressModal = (props: IRegisterProgressModal) => {
  const { isMobile, onModalClose, registrationState, progressSteps, originatorName, registrationRedirectUrl } = props;
  const navigate = useNavigate();

  const handleModalClose = useCallback(() => {
    onModalClose?.();
  }, [onModalClose]);

  const handleSuccessClose = useCallback(() => {
    onModalClose?.();
    if (registrationRedirectUrl) {
      window.location.href = registrationRedirectUrl;
      return;
    }
  }, [onModalClose, navigate, registrationRedirectUrl]);

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
            originatorName={originatorName}
          />
        );
      
      default:
        return null;
    }
  };

  return renderModal();
};

export { RegisterProgressModal };
