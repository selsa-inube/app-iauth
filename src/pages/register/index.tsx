import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { RegisterUI } from "./interface";
import { ITextSize } from "@ptypes/components/ITextSize";
import { registerLabels } from "@config/register/labels/registerLabels";
import { useBusinessData } from "@hooks/useBusinessData";
import { useCredentialRequirements } from "@hooks/useCredentialRequirements";
import type { ILocationState } from "@ptypes/pages/register/ILocationState";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";

const Register = () => {
  const location = useLocation() as { state: ILocationState };
  const navigate = useNavigate();
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const labelsSizeDifferent: ITextSize = screenMobile ? "medium" : "large";

  const userData: UserData | undefined = location.state?.userData;

  const { urlLogo } = useBusinessData({
    originatorId: userData?.originatorId,
    originatorCode: userData?.originatorCode,
  });

  const {
    fetchCredentialRequirements,
    policy: passwordPolicy,
    isLoading: isPolicyLoading,
  } = useCredentialRequirements();

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
    if (userData?.originatorId || userData?.originatorCode) {
      fetchCredentialRequirements({
        originatorId: userData.originatorId,
        originatorCode: userData.originatorCode,
      }).catch((error) => {
        console.error("Error fetching credential requirements:", error);
      });
    }
  }, [
    userData?.originatorId,
    userData?.originatorCode,
    fetchCredentialRequirements,
  ]);

  const handleRegisterSubmit = (formData: IRegisterFormData) => {
    console.log("Formulario de registro enviado:", formData);
    console.log("Política de contraseñas:", passwordPolicy);
  };

  if (!userData) {
    return null;
  }

  return (
    <RegisterUI
      labelsSize={labelsSizeDifferent}
      userData={userData}
      isMobile={screenMobile}
      labels={dynamicRegisterLabels}
      onRegisterSubmit={handleRegisterSubmit}
      passwordPolicy={passwordPolicy}
      isPolicyLoading={isPolicyLoading}
    />
  );
};

export { Register };
