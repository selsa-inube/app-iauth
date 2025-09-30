import { RequirementsBox } from "@components/utils/RequirementsBox";
import { Box, Textfield, Stack } from "@inubekit/inubekit";
import { StyledPasswordGrid } from "./styles";
import type { IPasswordStepUI } from "@ptypes/components/register/steps/IPasswordStepUI";

const PasswordStepUI = (props: IPasswordStepUI) => {
  const {
    formData,
    labels,
    onPasswordChange,
    onConfirmPasswordChange,
    passwordStatus,
    confirmPasswordStatus,
    validationMessage,
    confirmPasswordMessage,
    dynamicRequirements,
    isLoading,
  } = props;

  return (
    <Stack direction="column" gap="16px" width="100%" height="100%">
      <Box height="auto" width="100%">
        <StyledPasswordGrid>
          <Textfield
            id="password1"
            label={labels.password.passwordLabel}
            placeholder={labels.password.passwordPlaceholder}
            fullwidth={true}
            type="password"
            size="wide"
            maxLength={30}
            minLength={0}
            value={formData.password}
            onChange={onPasswordChange}
            message={validationMessage || labels.password.passwordMessage}
            status={passwordStatus}
          />
          <Textfield
            id="password2"
            label={labels.password.confirmPasswordLabel}
            placeholder={labels.password.confirmPasswordPlaceholder}
            fullwidth={true}
            type="password"
            size="wide"
            maxLength={30}
            minLength={0}
            value={formData.confirmPassword}
            onChange={onConfirmPasswordChange}
            message={confirmPasswordMessage}
            status={confirmPasswordStatus}
          />
        </StyledPasswordGrid>
      </Box>
      <RequirementsBox
        title={
          isLoading
            ? "Cargando requisitos..."
            : labels.password.requirements.title
        }
        requirements={dynamicRequirements}
        minWidth="10rem"
      />
    </Stack>
  );
};

export { PasswordStepUI };
