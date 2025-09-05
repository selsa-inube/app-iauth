import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { RegisterUI } from "./interface";
import { ITextSize } from "@ptypes/components/ITextSize";
import { registerLabels } from "@config/register/labels/registerLabels";
import { useBusinessData } from "@hooks/useBusinessData";
import { useCredentialRequirements } from "@hooks/useCredentialRequirements";
import { useRegisterModal } from "@hooks/useRegisterModal";
import type { ILocationState } from "@ptypes/pages/register/ILocationState";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import { RegisterProgressModal } from "@components/register/RegisterProgressModal";

const Register = () => {
  const location = useLocation() as { state: ILocationState };
  const navigate = useNavigate();
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const labelsSizeDifferent: ITextSize = screenMobile ? "medium" : "large";
  const userData: UserData | undefined = location.state?.userData;

  const { urlLogo } = useBusinessData({
    originatorCode: userData?.originatorCode,
  });

  const {
    fetchCredentialRequirements,
    fetchSecurityQuestions,
    policy: passwordPolicy,
    securityQuestions,
    isLoading: isPolicyLoading,
  } = useCredentialRequirements();

  const {
    isModalOpen,
    registerParams,
    openModal,
    closeModal,
  } = useRegisterModal(userData);

  const dynamicRegisterLabels = useMemo(
    () => ({
      ...registerLabels,
      invitedBy: {
        ...registerLabels.invitedBy,
        imageUrl: urlLogo,
      },
    }),
    [urlLogo],
  );

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

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

  return (
    <>
      <RegisterUI
        labelsSize={labelsSizeDifferent}
        userData={userData}
        isMobile={screenMobile}
        labels={dynamicRegisterLabels}
        onRegisterSubmit={openModal}
        passwordPolicy={passwordPolicy}
        isPolicyLoading={isPolicyLoading}
        securityQuestions={securityQuestions}
      />
      
      {isModalOpen && registerParams && (
        <RegisterProgressModal
          isMobile={screenMobile}
          registerParams={registerParams}
          onModalClose={closeModal}
        />
      )}
    </>
  );
};

export { Register };
