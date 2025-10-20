import React, { useState } from "react";
import { validateRequiredField } from "../../validations/fieldsValidations";
import { validateUsername } from "@services/validateUsername";
import { validatePassword } from "@services/validatePassword";
import { IFormStepLabels } from "@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { userNameStepLabels } from "@config/login/labels/usernameStepLabels";
import { passwordStepLabels } from "@config/login/labels/passwordStepLabels";
import { securityStepLabels } from "@config/login/labels/securityStepLabels";
import { useMediaQuery } from "@inubekit/inubekit";
import { ITextSize } from "@ptypes/components/ITextSize";
import { messages } from "@config/hook/messages";
import { EModalWarning } from "@enum/components/EModalWarning";
import { IUseTwoStepLoginForm } from "@ptypes/hooks/IUseTwoStepLoginForm";
import { modalWarningContent } from "@config/hook/modalWarning";
import { numberAttemptsDefault, authCodeQueryParam, stateQueryParam } from "@config/environment";

const useTwoStepLoginForm = (props: IUseTwoStepLoginForm) => {
  const { setModalWarningType, setRedirectPortal, callbackUrl, state, codeChallenge } = props;
  const [currentStep, setCurrentStep] = useState<EFormStepLabels>(
    EFormStepLabels.USER_NAME_INPUT,
  );
  const [inputValid, setInputValid] = useState<boolean | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [labels, setLabels] = useState<IFormStepLabels>(userNameStepLabels);
  const [securityImage, setSecurityImage] = useState<string>("");
  const [securityPhrase, setSecurityPhrase] = useState<string>("");
  const [numberPasswordAttempts, setNumberPasswordAttempts] = useState(0);
  const handleInputChange = (
    formSubmitEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(formSubmitEvent.target.value);
    if (inputValid === false) {
      setInputValid(null);
    }
  };

  const getAttemptsLeft = (description: string) => {
    const pattern = modalWarningContent.patternGetAttempts;
    const attempts = pattern.exec(description);

    if (attempts) {
      setNumberPasswordAttempts(Number(attempts[0]));
    }
  };

  const handleSubmit = async (
    formSubmitEvent: React.FormEvent<HTMLFormElement>,
  ) => {
    formSubmitEvent.preventDefault();

    if (currentStep === EFormStepLabels.USER_NAME_INPUT) {
      if (!validateRequiredField(inputValue)) {
        setInputValid(false);
        setLabels((prev) => ({
          ...prev,
          validation: {
            ...prev.validation,
            errorMessage: messages.messageUsernameRequired,
          },
        }));
        return;
      }

      const response = await validateUsername({ username: inputValue });

      if (response.status === Number(EModalWarning.USER_NOT_FOUND)) {
        setInputValid(false);
        setLabels((prev) => ({
          ...prev,
          validation: {
            ...prev.validation,
            errorMessage: messages.messageIncorrectUsername,
          },
        }));
        return;
      }
      if (response.status !== 200) {
        setInputValid(false);
        setLabels((prev) => ({
          ...prev,
          validation: {
            ...prev.validation,
            errorMessage: messages.messageServiceError,
          },
        }));
        return;
      }

      setUserName(inputValue);
      setSecurityImage(response.urlSecuritySignedImage || "");
      setSecurityPhrase(response.safetyPhrase);
      setCurrentStep(EFormStepLabels.SECURITY_CHECK);
      setInputValid(null);
      setInputValue("");
      setLabels(securityStepLabels);
    }

    if (currentStep === EFormStepLabels.SECURITY_CHECK) {
      setCurrentStep(EFormStepLabels.USER_PASSWORD_INPUT);
      setLabels(passwordStepLabels);
      return;
    }

    if (currentStep === EFormStepLabels.USER_PASSWORD_INPUT) {
      setModalWarningType(EModalWarning.NONE);
      setInputValid(true);

      if (!validateRequiredField(inputValue)) {
        setInputValid(false);
        setLabels((prev) => ({
          ...prev,
          validation: {
            ...prev.validation,
            errorMessage: messages.messagePasswordRequired,
          },
        }));
        return;
      }

      const response = await validatePassword({
        password: inputValue,
        username: userName,
        callbackUrl: callbackUrl,
        state: state,
        codeChallenge: codeChallenge,
      });

      if (
        response.code === EModalWarning.CODE_ERROR_CREDENTIALS &&
        response.description
      ) {
        const numberAttempts = numberPasswordAttempts + 1;
        getAttemptsLeft(response.description);
        setNumberPasswordAttempts(numberAttempts);
        setInputValid(false);
        setLabels((prev) => ({
          ...prev,
          validation: {
            ...prev.validation,
            errorMessage: messages.messageIncorrectPassword,
          },
        }));

        if (numberAttempts === Number(numberAttemptsDefault)) {
          setModalWarningType(EModalWarning.FIRST_WARNING);
        }

        return;
      }

      if (response.code === EModalWarning.CODE_ERROR_LOCK_ACCOUNT) {
        setModalWarningType(EModalWarning.SECOND_WARNING);
        return;
      }
      setRedirectPortal(true);
      setCurrentStep(EFormStepLabels.LOGIN_SUCCESS);
      setInputValue("");
      setInputValid(null);
      setTimeout(() => {
        const baseUrl = response.callbackUrl ?? "";
        const url = new URL(baseUrl);
        if (response.authenticationCode) {
          const queryParamName = authCodeQueryParam ?? "ac";
          url.searchParams.set(queryParamName, response.authenticationCode);
          const stateParamName = stateQueryParam ?? "state";
          url.searchParams.set(stateParamName, state ?? "");
        }
        window.location.href = url.toString();
      }, 2000);
    }
  };

  const screenMobile = useMediaQuery("(max-width: 768px)");
  const showLink = currentStep === EFormStepLabels.USER_NAME_INPUT;
  const widthStack = screenMobile ? "296px" : "452px";
  const labelsSize: ITextSize = screenMobile ? "small" : "medium";
  const labelsSizeDifferent: ITextSize = screenMobile ? "medium" : "large";

  return {
    showLink,
    currentStep,
    userName,
    handleInputChange,
    handleSubmit,
    labels,
    inputValid,
    inputValue,
    screenMobile,
    widthStack,
    labelsSize,
    labelsSizeDifferent,
    securityImage,
    securityPhrase,
  };
};

export { useTwoStepLoginForm };
