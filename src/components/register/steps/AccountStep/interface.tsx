import { Box, Textfield, Stack } from "@inubekit/inubekit";
import { RequirementsBox } from "@components/utils/RequirementsBox";
import type { IAccountStepUI } from "@ptypes/components/register/steps/IAccountStepUI";

const AccountStepUI = (props: IAccountStepUI) => {
  const { formData, labels, onUsernameChange, fieldStatus, validationMessage } =
    props;

  return (
    <Stack direction="column" gap="16px" width="100%">
      <Box height="auto" width="100%">
        <Textfield
          id="username"
          label={labels.account.usernameLabel}
          placeholder={labels.account.usernamePlaceholder}
          fullwidth={true}
          type="text"
          size="wide"
          maxLength={30}
          minLength={0}
          value={formData.username}
          onChange={onUsernameChange}
          message={validationMessage}
          status={fieldStatus}
        />
      </Box>

      <RequirementsBox
        title={labels.account.requirements.title}
        requirements={labels.account.requirements.items}
        minWidth="205px"
      />
    </Stack>
  );
};

export { AccountStepUI };
