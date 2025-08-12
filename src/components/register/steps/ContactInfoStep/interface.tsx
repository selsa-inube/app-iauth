import {
  Box,
  Emailfield,
  Phonefield,
  Label,
  Toggle,
  Stack,
  Fieldset,
} from "@inubekit/inubekit";
import { MdOutlineMail } from "react-icons/md";
import type { IContactInfoStepUI } from "@ptypes/components/register/steps/IContactInfoStepUI";

const ContactInfoStepUI = (props: IContactInfoStepUI) => {
  const { formData, labels, onEmailChange, onPhoneChange, onWhatsappToggle } =
    props;

  return (
    <Stack direction="column" gap="16px" width="100%">
      <Box height="auto" width="100%">
        <Emailfield
          id="email"
          label={labels.contactInfo.emailLabel}
          placeholder={labels.contactInfo.emailPlaceholder}
          fullwidth={true}
          type="email"
          size="wide"
          maxLength={50}
          minLength={0}
          value={formData.email}
          onChange={onEmailChange}
          iconBefore={<MdOutlineMail />}
          iconAfter={false}
        />
        <Fieldset legend="Móvil" spacing="compact">
          <div>
            <Phonefield
              id="phone"
              label={labels.contactInfo.phoneLabel}
              placeholder={labels.contactInfo.phonePlaceholder}
              size="wide"
              value={formData.phone}
              onChange={onPhoneChange}
            />

            <Label>{labels.contactInfo.whatsappLabel}</Label>
            <Toggle
              id="isWppUsed"
              checked={formData.isWhatsappUsed}
              onChange={onWhatsappToggle}
            >
              {labels.contactInfo.whatsappToggleLabel}
            </Toggle>
          </div>
        </Fieldset>
      </Box>
    </Stack>
  );
};

export { ContactInfoStepUI };
