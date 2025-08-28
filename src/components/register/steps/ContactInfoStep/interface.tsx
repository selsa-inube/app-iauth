import {
  Box,
  Emailfield,
  Label,
  Toggle,
  Stack,
  Fieldset,
} from "@inubekit/inubekit";
import { MdOutlineMail } from "react-icons/md";
import type { IContactInfoStepUI } from "@ptypes/components/register/steps/IContactInfoStepUI";
import { FieldsRow } from "./styles";
import { PhoneNumberField } from "@components/form/PhoneNumberField";

const ContactInfoStepUI = (props: IContactInfoStepUI) => {
  const {
    formData,
    labels,
    onEmailChange,
    onPhoneChange: onPhoneChangeHandler,
    onPhoneCountryChange,
    onWhatsappToggle,
    onWhatsappPhoneChange,
    onWhatsappPhoneCountryChange,
    isMobile,
    errors,
  } = props;

  return (
    <Box height="auto" width="100%">
      <Stack direction="column" gap="0.8rem" width="100%">
        <Emailfield
          id="email"
          label={labels.contactInfo.emailLabel}
          placeholder={labels.contactInfo.emailPlaceholder}
          fullwidth={true}
          type="email"
          size="compact"
          maxLength={50}
          minLength={0}
          value={formData.email}
          onChange={onEmailChange}
          iconBefore={<MdOutlineMail />}
          iconAfter={false}
          status={errors?.email ? "invalid" : "pending"}
          message={errors?.email ?? ""}
        />
        <Fieldset legend="Móvil" spacing="compact">
          <FieldsRow $isMobile={isMobile}>
            <div className="field-wrapper first">
              <PhoneNumberField
                id="phone"
                label={labels.contactInfo.phoneLabel}
                placeholder={labels.contactInfo.phonePlaceholder}
                size="compact"
                fullwidth={true}
                value={formData.phone}
                countryCode={formData.phoneCountryCode}
                onChange={onPhoneChangeHandler}
                onCountryChange={(country) => {
                  console.log("Phone country changed:", country);
                  onPhoneCountryChange(country);
                }}
                showDialCode={!isMobile}
                error={errors?.phone ?? ""}
              />
            </div>
            <div className="field-wrapper middle">
              <Label>
                <b>
                  {isMobile
                    ? labels.contactInfo.whatsappLabelMobile
                    : labels.contactInfo.whatsappLabel}
                </b>
              </Label>
              <Toggle
                id="isWppUsed"
                checked={formData.isWhatsappUsed}
                onChange={onWhatsappToggle}
                margin={!isMobile ? "1rem 0" : ""}
              >
                {labels.contactInfo.whatsappToggleLabel}
              </Toggle>
            </div>
            <div className="field-wrapper last">
              {formData.isWhatsappUsed === false && (
                <PhoneNumberField
                  id="whatsappPhone"
                  label={labels.contactInfo.whatsappPhoneLabel}
                  placeholder={labels.contactInfo.whatsappPhonePlaceholder}
                  size="compact"
                  fullwidth={true}
                  value={formData.whatsappPhone ?? ""}
                  countryCode={formData.whatsappPhoneCountryCode}
                  onChange={onWhatsappPhoneChange}
                  onCountryChange={(country) => {
                    console.log("WhatsApp country changed:", country);
                    onWhatsappPhoneCountryChange?.(country);
                  }}
                  showDialCode={!isMobile}
                  error={errors?.whatsappPhone ?? ""}
                />
              )}
            </div>
          </FieldsRow>
        </Fieldset>
      </Stack>
    </Box>
  );
};

export { ContactInfoStepUI };
