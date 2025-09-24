import { useEffect } from "react";
import { SecurityImageStepUI } from "./interface";
import type { ISecurityImageStep } from "@ptypes/components/register/steps/ISecurityImageStep";

const SecurityImageStep = (props: ISecurityImageStep) => {
  const { formData, onFormChange, labels, onNextEnabledChange } = props;

  const handlePhraseChange = (value: string) => {
    onFormChange("securityPhrase", value);
  };

  useEffect(() => {
    const enabled = (formData.securityPhrase ?? "").trim().length > 0;
    onNextEnabledChange?.(enabled);
  }, [formData.securityPhrase, onNextEnabledChange]);

  return (
    <SecurityImageStepUI
      labels={labels}
      formData={formData}
      onPhraseChange={handlePhraseChange}
    />
  );
};

export { SecurityImageStep };
