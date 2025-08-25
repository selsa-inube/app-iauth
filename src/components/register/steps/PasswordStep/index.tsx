import { useEffect, useState } from "react";
import { PasswordStepUI } from "./interface";
import { usePasswordPolicy } from "@hooks/usePasswordPolicy";
import type { IPasswordStepProps } from "@ptypes/components/register/steps/IPasswordStepProps";

const PasswordStep = (props: IPasswordStepProps) => {
  const {
    formData,
    onFormChange,
    labels,
    onNextEnabledChange,
    passwordPolicy,
    isPolicyLoading,
  } = props;
  const { validatePassword } = usePasswordPolicy();
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] =
    useState<string>("");
  const [passwordStatus, setPasswordStatus] = useState<"pending" | "invalid">(
    "pending",
  );
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState<
    "pending" | "invalid"
  >("pending");
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("password", e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFormChange("confirmPassword", e.target.value);
  };

  useEffect(() => {
    if (!passwordPolicy) return;

    const passwordValidation = validatePassword(
      formData.password,
      passwordPolicy,
    );
    const passwordsMatch =
      formData.password === formData.confirmPassword &&
      formData.confirmPassword !== "";

    if (formData.password.trim().length === 0) {
      setPasswordStatus("pending");
      setValidationMessage("");
    } else if (!passwordValidation.isValid) {
      setPasswordStatus("invalid");
      setValidationMessage(
        passwordValidation.failedRequirements[0] ?? "Contraseña no válida",
      );
    } else {
      setPasswordStatus("pending");
      setValidationMessage("Contraseña válida");
    }

    if (formData.confirmPassword.trim().length === 0) {
      setConfirmPasswordStatus("pending");
      setConfirmPasswordMessage(labels.password.passwordMessage);
    } else if (!passwordsMatch) {
      setConfirmPasswordStatus("invalid");
      setConfirmPasswordMessage("Las contraseñas no coinciden");
    } else {
      setConfirmPasswordStatus("pending");
      setConfirmPasswordMessage(labels.password.passwordMessage);
    }

    const isValid = passwordValidation.isValid && passwordsMatch;
    onNextEnabledChange?.(isValid);
  }, [
    formData.password,
    formData.confirmPassword,
    onNextEnabledChange,
    validatePassword,
    passwordPolicy,
    labels.password.passwordMessage,
  ]);

  return (
    <PasswordStepUI
      formData={formData}
      labels={labels}
      onPasswordChange={handlePasswordChange}
      onConfirmPasswordChange={handleConfirmPasswordChange}
      passwordStatus={passwordStatus}
      confirmPasswordStatus={confirmPasswordStatus}
      validationMessage={validationMessage}
      confirmPasswordMessage={confirmPasswordMessage}
      dynamicRequirements={
        passwordPolicy?.requirements.map((req) => req.value) ??
        labels.password.requirements.items
      }
      isLoading={isPolicyLoading ?? false}
    />
  );
};

export { PasswordStep };
