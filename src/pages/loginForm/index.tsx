import { LoginFormUI } from "./interface";
import { useTwoStepLoginForm } from "@hooks/useTwoStepLoginForm";
import { Card } from "@components/layout/Card";
import { ILoginForm } from "@ptypes/pages/loginForm/ILoginForm";

const LoginForm = (props: ILoginForm) => {
  const { setModalWarningType, setRedirectPortal, callbackUrl, state, codeChallenge, applicationName } = props;

  const {
    showLink,
    currentStep,
    handleBack,
    handleInputChange,
    handleSubmit,
    labels,
    inputValid,
    inputValue,
    widthStack,
    labelsSize,
    labelsSizeDifferent,
    securityImage,
    securityPhrase,
    screenMobile
  } = useTwoStepLoginForm({
    setModalWarningType,
    setRedirectPortal,
    callbackUrl,
    applicationName,
    state,
    codeChallenge,
  });

  return (
    <Card>
      <LoginFormUI
        currentStep={currentStep}
        handleSubmit={handleSubmit}
        onBack={handleBack}
        labels={labels}
        inputValid={inputValid}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        screenMobile={widthStack}
        labelsSize={labelsSize}
        labelsSizeDifferent={labelsSizeDifferent}
        showLink={showLink}
        securityImage={securityImage}
        securityPhrase={securityPhrase}
        isMobile={screenMobile}
      />
    </Card>
  );
};

export { LoginForm };
