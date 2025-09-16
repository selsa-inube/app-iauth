import { useEffect, useState } from "react";
import { ContactInfoStepUI } from "./interface";
import type { IContactInfoStep } from "@ptypes/components/register/steps/IContactInfoStepProps";
import type { CountryOption } from "@components/form/PhoneNumberField/types";

const ContactInfoStep = (props: IContactInfoStep) => {
  const { formData, onFormChange, labels, onNextEnabledChange, isMobile } =
    props;

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    whatsappPhone: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("email", e.target.value);
  };

  const handlePhoneChange = (val: string) => {
    onFormChange("phone", val);
  };

  const handlePhoneCountryChange = (country: CountryOption) => {
    onFormChange("phoneCountryCode", country.code);
    onFormChange("phoneDialCode", country.dialCode);
  };

  const handleWhatsappToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("isWhatsappUsed", e.target.checked);
  };

  const handleWhatsappPhoneChange = (val: string) => {
    onFormChange("whatsappPhone", val);
  };

  const handleWhatsappPhoneCountryChange = (country: CountryOption) => {
    onFormChange("whatsappPhoneCountryCode", country.code);
    onFormChange("whatsappPhoneDialCode", country.dialCode);
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email.trim());

    const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
    const isValidPhone = phoneDigits.length >= 7;

    const baseValid = isValidEmail && isValidPhone;

    const needsAltWhatsapp = formData.isWhatsappUsed === false;
    let altValid = true;

    if (needsAltWhatsapp) {
      const whatsappDigits = (formData.whatsappPhone ?? "").replace(
        /[^0-9]/g,
        "",
      );
      altValid = whatsappDigits.length >= 7;
    }

    const newErrors = {
      email:
        formData.email.trim() && !isValidEmail
          ? labels.contactInfo.errors.invalidEmail
          : "",
      phone:
        formData.phone.trim() && !isValidPhone
          ? labels.contactInfo.errors.minimumDigits
          : "",
      whatsappPhone:
        needsAltWhatsapp && formData.whatsappPhone?.trim() && !altValid
          ? labels.contactInfo.errors.minimumDigits
          : "",
    };
    setErrors(newErrors);

    const isValid = baseValid && altValid;
    onNextEnabledChange?.(isValid);
  }, [
    formData.email,
    formData.phone,
    formData.whatsappPhone,
    formData.isWhatsappUsed,
    onNextEnabledChange,
    labels.contactInfo.errors.invalidEmail,
    labels.contactInfo.errors.minimumDigits,
  ]);

  return (
    <ContactInfoStepUI
      formData={formData}
      labels={labels}
      onEmailChange={handleEmailChange}
      onPhoneChange={handlePhoneChange}
      onPhoneCountryChange={handlePhoneCountryChange}
      onWhatsappToggle={handleWhatsappToggle}
      onWhatsappPhoneChange={handleWhatsappPhoneChange}
      onWhatsappPhoneCountryChange={handleWhatsappPhoneCountryChange}
      isMobile={isMobile}
      errors={errors}
    />
  );
};

export { ContactInfoStep };
