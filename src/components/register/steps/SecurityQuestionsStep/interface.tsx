import { Box, Textfield, Select, Text, Stack } from "@inubekit/inubekit";
import { StyledQuestionsGrid } from "./styles";
import type { ISecurityQuestionsStepUI } from "@ptypes/components/register/steps/ISecurityQuestionsStepUI";

const SecurityQuestionsStepUI = (props: ISecurityQuestionsStepUI) => {
  const {
    formData,
    labels,
    onSecurityQuestion1Change,
    onSecurityQuestion2Change,
    onSecurityQuestion3Change,
    onReligionChange,
    onBirthplaceChange,
  } = props;

  return (
    <Stack direction="column" gap="16px" width="100%" height="100%">
      <Box height="auto" width="100%">
        <Text appearance="gray">{labels.securityQuestions.description}</Text>
        <StyledQuestionsGrid>
          <Textfield
            id="securityQuestion1"
            label={labels.securityQuestions.question1Label}
            placeholder={labels.securityQuestions.questionPlaceholder}
            fullwidth={true}
            type="text"
            size="wide"
            maxLength={30}
            minLength={0}
            value={formData.securityQuestion1}
            onChange={onSecurityQuestion1Change}
          />

          <Textfield
            id="securityQuestion2"
            label={labels.securityQuestions.question2Label}
            placeholder={labels.securityQuestions.questionPlaceholder}
            fullwidth={true}
            type="text"
            size="wide"
            maxLength={50}
            minLength={0}
            value={formData.securityQuestion2}
            onChange={onSecurityQuestion2Change}
          />

          <Textfield
            id="securityQuestion3"
            label={labels.securityQuestions.question3Label}
            placeholder={labels.securityQuestions.questionPlaceholder}
            fullwidth={true}
            type="text"
            size="wide"
            maxLength={50}
            minLength={0}
            value={formData.securityQuestion3}
            onChange={onSecurityQuestion3Change}
          />

          <Select
            label={labels.securityQuestions.religionLabel}
            placeholder={labels.securityQuestions.religionPlaceholder}
            fullwidth={true}
            options={labels.securityQuestions.religionOptions}
            onChange={onReligionChange}
            name="religion"
            value={formData.religion}
          />

          <Select
            label={labels.securityQuestions.birthplaceLabel}
            placeholder={labels.securityQuestions.birthplacePlaceholder}
            fullwidth={true}
            options={labels.securityQuestions.birthplaceOptions}
            name="birthplace"
            onChange={onBirthplaceChange}
            value={formData.birthplace}
          />
        </StyledQuestionsGrid>
      </Box>
    </Stack>
  );
};

export { SecurityQuestionsStepUI };
