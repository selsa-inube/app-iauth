import { useEffect, useState } from "react";
import { SecurityImageStepUI } from "./interface";
import type { ISecurityImageStep } from "@ptypes/components/register/steps/ISecurityImageStep";
import { SecurityImagePicker } from "@components/modals/SecurityImagePicker";

const SecurityImageStep = (props: ISecurityImageStep) => {
  const { formData, onFormChange, labels, onNextEnabledChange, isMobile } = props;

  const [pickerOpen, setPickerOpen] = useState(false);

  const handlePhraseChange = (value: string) => {
    onFormChange("SafetyPhrase", value);
  };

  const handleOpenPicker = () => setPickerOpen(true);
  const handleClosePicker = () => setPickerOpen(false);
  const handleSelectImage = (src: string) => {
    onFormChange("securityImage", src);
    setPickerOpen(false);
  };

  useEffect(() => {
    const enabled = (formData.SafetyPhrase ?? "").trim().length > 0;
    onNextEnabledChange?.(enabled);
  }, [formData.SafetyPhrase, onNextEnabledChange]);

  return (
    <>
      <SecurityImageStepUI
        labels={labels}
        formData={formData}
        onPhraseChange={handlePhraseChange}
        onOpenPicker={handleOpenPicker}
      />
      <SecurityImagePicker
        open={pickerOpen}
        onClose={handleClosePicker}
        onSelect={handleSelectImage}
        isMobile={isMobile}
      />
    </>
  );
};

export { SecurityImageStep };
