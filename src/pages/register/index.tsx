import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RegisterUI } from "./interface";
import { TextSize } from "@ptypes/components/TextSize";
import { registerLabels } from "@config/register/labels/registerLabels";
import type { ILocationState } from "@ptypes/pages/register/ILocationState";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

const Register = () => {
  const location = useLocation() as { state: ILocationState };
  const navigate = useNavigate();
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const labelsSizeDifferent: TextSize = screenMobile ? "medium" : "large";

  const userData: UserData | undefined = location.state?.userData;
  console.log("Register page userData:", userData);
  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  if (!userData) {
    return null;
  }

  return <RegisterUI 
    labelsSize={labelsSizeDifferent} 
    userData={userData} 
    isMobile={screenMobile}
    labels={registerLabels}
    currentStep="Paso inicial del registro"
  />;
};

export default Register;
