import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useCallback } from "react";
import { RegisterUI } from "./interface";
import { ITextSize } from "@ptypes/components/ITextSize";
import { registerLabels } from "@config/register/labels/registerLabels";
import { useBusinessDataContext } from "@context/businessData";
import { useCredentialRequirements } from "@hooks/useCredentialRequirements";
import type { ILocationState } from "@ptypes/pages/register/ILocationState";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import { RegisterProgressModal } from "@components/register/RegisterProgressModal";
import { useRegisterFlow } from "@hooks/useRegisterFlow";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";

const Register = () => {
  const location = useLocation() as { state: ILocationState };
  const navigate = useNavigate();
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const labelsSizeDifferent: ITextSize = screenMobile ? "medium" : "large";
  const userData: UserData | undefined = location.state?.userData;

  const { originatorData, fetchOriginatorData } = useBusinessDataContext();

  const {
    fetchCredentialRequirements,
    fetchSecurityQuestions,
    policy: passwordPolicy,
    securityQuestions,
    isLoading: isPolicyLoading,
  } = useCredentialRequirements();

  const {
    isModalOpen,
    registrationState,
    progressSteps,
    handleRegisterSubmit,
    onModalClose,
  } = useRegisterFlow(userData);

  const dynamicRegisterLabels = useMemo(
    () => ({
      ...registerLabels,
      invitedBy: {
        ...registerLabels.invitedBy,
        imageUrl: originatorData?.signedUrlLogo || "",
      },
    }),
    [originatorData?.signedUrlLogo],
  );

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  useEffect(() => {
    if (userData?.originatorCode) {
      fetchOriginatorData(undefined, userData.originatorCode).catch((error) => {
        console.error("Error fetching originator data:", error);
      });
    }
  }, [userData?.originatorCode, fetchOriginatorData]);

  useEffect(() => {
    if (userData?.originatorCode) {
      fetchCredentialRequirements({
        originatorCode: userData.originatorCode,
      }).catch((error) => {
        console.error("Error fetching credential requirements:", error);
      });
    }
  }, [
    userData?.originatorCode,
    originatorData?.originatorCode,
    fetchCredentialRequirements,
  ]);

  useEffect(() => {
    if (
      passwordPolicy?.policyForTheUserKey === "HighLevel" &&
      (userData?.originatorCode)
    ) {
      fetchSecurityQuestions({
        originatorCode: userData.originatorCode,
      }).catch((error) => {
        console.error("Error fetching security questions:", error);
      });
    }
  }, [
    passwordPolicy?.policyForTheUserKey,
    userData?.originatorCode,
    fetchSecurityQuestions,
  ]);

  if (!userData) {
    return null;
  }

  const handleSubmit = useCallback((formData: IRegisterFormData) => {
    handleRegisterSubmit(formData);
  }, [handleRegisterSubmit]);

  return (
    <>
      <RegisterUI
        labelsSize={labelsSizeDifferent}
        userData={userData}
        isMobile={screenMobile}
        labels={dynamicRegisterLabels}
        onRegisterSubmit={handleSubmit}
        passwordPolicy={passwordPolicy}
        isPolicyLoading={isPolicyLoading}
        securityQuestions={securityQuestions}
      />
      
      {isModalOpen && (
        <RegisterProgressModal
          isMobile={screenMobile}
          registrationState={registrationState}
          progressSteps={progressSteps}
          originatorName={userData?.originatorName}
          onModalClose={onModalClose}
          registrationRedirectUrl={userData?.registrationRedirectUrl}
        />
      )}
    </>
  );
};

export { Register };
