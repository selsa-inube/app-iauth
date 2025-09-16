import { MdCheckCircle } from "react-icons/md";
import { Icon, ProgressBar, Stack, Text } from "@inubekit/inubekit";
import { tokens } from "@design/tokens/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { StyledContainerProgressBar, StyledStepIndicator, StyledRequestContainer } from "./styles";
import { IRequestProcessDesktop } from "./interface";
import { addPercentage } from "@utils/addPercentage";
import { countVerifiedRequests } from "@utils/countVerifiedRequests";
import { getRequestAppearance } from "@utils/verifiedRequestAppearance";
import { requestProcessDesktop } from "@config/components/requestProcessDesktop";

const RequestProcessDesktop = (props: IRequestProcessDesktop) => {
  const { requestSteps, iconSize, stepCurrent, stepCurrentIndex } = props;

  if (!requestSteps || requestSteps.length === 0) {
    return (
      <StyledRequestContainer>
        <Stack
          direction="column"
          gap={tokens.spacing.s100}
          width="100%"
          alignItems="center"
        >
          <Text size="medium" appearance={EComponentAppearance.GRAY}>
            {requestProcessDesktop.loading}
          </Text>
        </Stack>
      </StyledRequestContainer>
    );
  }

  const validStepIndex = Math.max(0, Math.min(stepCurrentIndex, requestSteps.length - 1));
  
  const { appearance, isError, appearanceProgressBar } = getRequestAppearance(
    requestSteps,
    validStepIndex,
  );

  const percentage = addPercentage(countVerifiedRequests(requestSteps));

  const numberOfSteps = `${stepCurrent}/${requestSteps.length}`;
  const isLastStep = stepCurrent === requestSteps.length;
  
  const currentStepName = requestSteps[validStepIndex]?.name || requestProcessDesktop.processing;
  
  return (
    <StyledRequestContainer>
      <Stack
        direction="column"
        gap={tokens.spacing.s100}
        width="100%"
        alignItems="center"
      >
        <Stack gap={tokens.spacing.s100} alignItems="center" width="100%">
          {isLastStep ? (
            <Icon
              icon={<MdCheckCircle />}
              size={iconSize}
              appearance={appearance}
            />
          ) : (
            <StyledStepIndicator $statusError={isError}>
              <Text
                type="label"
                size="medium"
                appearance={appearance}
                weight="bold"
              >
                {stepCurrent}
              </Text>
            </StyledStepIndicator>
          )}

          <Text
            size="medium"
            appearance={EComponentAppearance.DARK}
            weight="bold"
            ellipsis
          >
            {currentStepName}
          </Text>
        </Stack>
        <Stack width="100%" gap={tokens.spacing.s100} alignItems="center">
          <StyledContainerProgressBar
            $appearance={EComponentAppearance.GRAY}
            $height="8px"
          >
            <ProgressBar
              height="8px"
              appearance={appearanceProgressBar}
              progress={countVerifiedRequests(requestSteps)}
            />
          </StyledContainerProgressBar>
          <Text type="label" size="medium" weight="bold">
            {numberOfSteps}
          </Text>
        </Stack>
        <Text type="label" size="large" appearance={EComponentAppearance.GRAY}>
          {percentage}
        </Text>
      </Stack>
    </StyledRequestContainer>
  );
};

export { RequestProcessDesktop };