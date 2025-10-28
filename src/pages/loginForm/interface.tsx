import { Divider, Grid, Stack, Button, Icon } from "@inubekit/inubekit";
import { Links } from "@pages/link";
import { DynamicInputs } from "@components/login/DynamicInputs";
import { ILoginForm } from "@ptypes/components/login/ILoginForm";
import { Header } from "@components/layout/Header";
import { SecurityCheck } from "@components/login/SecurityCheck";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { securityLabels } from "@config/login/labels/securityCheck";
import { MdOutlineArrowBack } from "react-icons/md";

const LoginFormUI = (props: ILoginForm) => {
  const {
    handleSubmit,
    onBack,
    labels,
    inputValid,
    handleInputChange,
    inputValue,
    currentStep,
    labelsSize,
    screenMobile,
    showLink,
    securityImage,
    securityPhrase,
    isMobile
  } = props;
  const isSecurityStep = currentStep === EFormStepLabels.SECURITY_CHECK;
  const isPasswordStep = currentStep === EFormStepLabels.USER_PASSWORD_INPUT;
  const showBack = isSecurityStep || isPasswordStep;

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        templateColumns="auto"
        templateRows={isSecurityStep ? "repeat(5, auto)" : "repeat(7, auto)"}
        gap="13px"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        {showBack ? (
          <Grid templateColumns="auto 1fr auto" alignItems="center" width={screenMobile}>
            <Stack width="24px" alignItems="flex-start">
              <Icon
                onClick={onBack}
                icon={<MdOutlineArrowBack />}
                appearance="gray"
              />
            </Stack>
            <Header />
            <Stack width="24px" />
          </Grid>
        ) : (
          <Header />
        )}

        <Divider dashed />

        {isSecurityStep ? (
          <Stack
            direction="column"
            gap="13px"
            width={screenMobile}
            alignItems="center"
          >
            <SecurityCheck
              imageUrl={securityImage || ""}
              phrase={securityPhrase ?? ""}
              isMobile={isMobile}
            />
          </Stack>
        ) : (
          <DynamicInputs
            labels={labels}
            inputValid={inputValid}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            currentStep={currentStep}
            labelsSize={labelsSize}
            showUserIcon={showLink}
          />
        )}

        {isSecurityStep ? (
          <Stack direction="row" width={screenMobile} justifyContent="flex-end" gap="16px">
            <Button
              type="button"
              onClick={onBack}
              variant="outlined"
              appearance="gray"
            >
              {securityLabels.actions.back}
            </Button>
            <Button appearance="primary" type="submit">
              {securityLabels.actions.continue}
            </Button>
          </Stack>
        ) : (
          <Stack direction="column" width={screenMobile} alignItems="center">
            <Button
              appearance="primary"
              type="submit"
              children={isPasswordStep ? securityLabels.actions.login : securityLabels.actions.continue}
              fullwidth={true}
            />
          </Stack>
        )}
        {showLink && <Links labelsSize="small" />}
      </Grid>
    </form>
  );
};

export { LoginFormUI };
