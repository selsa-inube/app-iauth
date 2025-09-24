import { Stack, Text, Icon, Button, Textfield, Box } from "@inubekit/inubekit";
import { MdOutlineImage } from "react-icons/md";
import { StyledCircle } from "./styles";
import type { ISecurityImageStepUI } from "@ptypes/components/register/steps/ISecurityImageStepUI";
import { securityImageStepLabels } from "@config/register/labels/securityImageStepLabels";

const SecurityImageStepUI = (props: ISecurityImageStepUI) => {
  const { formData, onPhraseChange } = props;

  return (
    <Stack direction="column" gap="16px" width="100%" height="100%">
      <Box>
          <Text appearance="gray" type="title" size="medium">
            {securityImageStepLabels.title}
          </Text>
          <Stack direction="column" alignItems="center" gap="16px" padding="11px 0">
            <StyledCircle>
              <Icon size="60px" icon={<MdOutlineImage />} appearance="light" />
            </StyledCircle>
            <Button variant="outlined" appearance="primary">
              {securityImageStepLabels.selectButton}
            </Button>
          </Stack>
          <Textfield
            id="security-phrase"
            label={securityImageStepLabels.phraseLabel}
            placeholder={securityImageStepLabels.phrasePlaceholder}
            fullwidth={true}
            type="text"
            size="wide"
            maxLength={150}
            minLength={0}
            value={formData.securityPhrase ?? ""}
            onChange={(e) => onPhraseChange?.(e.target.value)}
          />
        </Box>
    </Stack>
  );
};

export { SecurityImageStepUI };
