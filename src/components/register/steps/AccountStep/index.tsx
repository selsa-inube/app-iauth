import { useEffect, useState } from "react";
import { AccountStepUI } from "./interface";
import type { IAccountStep } from "@ptypes/components/register/steps/IAccountStepProps";

const AccountStep = (props: IAccountStep) => {
  const { formData, onFormChange, labels, onNextEnabledChange } = props;
  const [validationMessage, setValidationMessage] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("username", e.target.value);
  };
  const validateUsername = (
    username: string,
  ): { isValid: boolean; message: string } => {
    const trimmedUsername = username.trim();
    if (trimmedUsername.length === 0) {
      return { isValid: false, message: labels.account.usernameMessage };
    }
    if (trimmedUsername.length < 8) {
      return {
        isValid: false,
        message: "El nombre de usuario debe tener al menos 8 caracteres.",
      };
    }
    if (trimmedUsername !== trimmedUsername.toLowerCase()) {
      return {
        isValid: false,
        message: "El nombre de usuario solo debe contener letras minúsculas.",
      };
    }

    const validCharacters = /^[a-z0-9]+$/.test(trimmedUsername);
    if (!validCharacters) {
      return {
        isValid: false,
        message:
          "El nombre de usuario solo puede contener letras minúsculas y números.",
      };
    }
    const hasLetters = /[a-z]/.test(trimmedUsername);
    const hasNumbers = /[0-9]/.test(trimmedUsername);

    if (!hasLetters) {
      return {
        isValid: false,
        message: "El nombre de usuario debe incluir al menos una letra.",
      };
    }

    if (!hasNumbers) {
      return {
        isValid: false,
        message: "El nombre de usuario debe incluir al menos un número.",
      };
    }

    return { isValid: true, message: "Nombre de usuario válido." };
  };

  useEffect(() => {
    const validation = validateUsername(formData.username);
    setValidationMessage(validation.message);
    onNextEnabledChange?.(validation.isValid);
  }, [formData.username, onNextEnabledChange, labels.account.usernameMessage]);

  const validation = validateUsername(formData.username);

  const getFieldStatus = (): "pending" | "invalid" => {
    if (formData.username.trim().length === 0) {
      return "pending";
    }
    return validation.isValid ? "pending" : "invalid";
  };

  return (
    <AccountStepUI
      formData={formData}
      labels={labels}
      onUsernameChange={handleUsernameChange}
      fieldStatus={getFieldStatus()}
      validationMessage={validationMessage}
    />
  );
};

export { AccountStep };
