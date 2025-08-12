import { useEffect } from "react";
import { SecurityQuestionsStepUI } from "./interface";
import type { IRegisterStepProps } from "@ptypes/components/register/IRegisterStepProps";

const SecurityQuestionsStep = (props: IRegisterStepProps) => {
  const { formData, onFormChange, labels, onNextEnabledChange } = props;

  const handleSecurityQuestion1Change = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFormChange("securityQuestion1", e.target.value);
  };

  const handleSecurityQuestion2Change = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFormChange("securityQuestion2", e.target.value);
  };

  const handleSecurityQuestion3Change = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFormChange("securityQuestion3", e.target.value);
  };

  const handleReligionChange = (_: string, value: string) => {
    onFormChange("religion", value);
  };

  const handleBirthplaceChange = (_: string, value: string) => {
    onFormChange("birthplace", value);
  };

  useEffect(() => {
    const answeredQuestions = [
      formData.securityQuestion1.trim(),
      formData.securityQuestion2.trim(),
      formData.securityQuestion3.trim(),
      formData.religion.trim(),
      formData.birthplace.trim(),
    ].filter((answer) => answer !== "").length;

    const isValid = answeredQuestions >= 3;
    onNextEnabledChange?.(isValid);
  }, [
    formData.securityQuestion1,
    formData.securityQuestion2,
    formData.securityQuestion3,
    formData.religion,
    formData.birthplace,
    onNextEnabledChange,
  ]);

  return (
    <SecurityQuestionsStepUI
      formData={formData}
      labels={labels}
      onSecurityQuestion1Change={handleSecurityQuestion1Change}
      onSecurityQuestion2Change={handleSecurityQuestion2Change}
      onSecurityQuestion3Change={handleSecurityQuestion3Change}
      onReligionChange={handleReligionChange}
      onBirthplaceChange={handleBirthplaceChange}
    />
  );
};

export { SecurityQuestionsStep };
