import { useEffect } from "react";
import { ContactInfoStepUI } from "./interface";
import type { IRegisterStepProps } from "@ptypes/components/register/IRegisterStepProps";

const ContactInfoStep = (props: IRegisterStepProps) => {
  const { formData, onFormChange, labels, onNextEnabledChange } = props;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("email", e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("phone", e.target.value);
  };

  const handleWhatsappToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("isWhatsappUsed", e.target.checked);
  };

  useEffect(() => {
    const isValid =
      formData.email.trim() !== "" && formData.phone.trim() !== "";
    onNextEnabledChange?.(isValid);
  }, [formData.email, formData.phone, onNextEnabledChange]);

  return (
    <ContactInfoStepUI
      formData={formData}
      labels={labels}
      onEmailChange={handleEmailChange}
      onPhoneChange={handlePhoneChange}
      onWhatsappToggle={handleWhatsappToggle}
    />
  );
};

export { ContactInfoStep };
