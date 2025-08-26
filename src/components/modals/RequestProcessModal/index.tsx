import { Stack, Text, Blanket, Divider, Button } from "@inubekit/inubekit";

import { EComponentAppearance } from "@enum/appearances";
import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";
import { tokens } from "@design/tokens/tokens";
import { lastCompletedIndex } from "@utils/lastCompletedIndex";
import { StyledModal } from "./styles";
import { RequestProcessDesktop } from "@components/utils/RequestProcessDesktop";
import { IRequestProcessModal } from "@ptypes/modals/requestProcessModal";
import { registerProgressModal } from "@config/register/modal/registerProgress";

const RequestProcessModal = (props: IRequestProcessModal) => {
  const {
    iconSize = "28px",
    requestSteps,
    isMobile,
    description,
    title,
    onComplete,
  } = props;

  const node = document.body

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  if (!requestSteps || requestSteps.length === 0) {
    return (
      <Blanket>
        <StyledModal $smallScreen={isMobile}>
          <Stack direction="column" gap={tokens.spacing.s200} width="100%">
            <Stack direction="column" gap={tokens.spacing.s100}>
              <Text type="title" size="medium" weight="bold">
                {title || registerProgressModal.loading.title}
              </Text>
              <Divider />
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Text
                size={isMobile ? "small" : "medium"}
                appearance={EComponentAppearance.GRAY}
              >
                {description || registerProgressModal.loading.description}
              </Text>
            </Stack>
          </Stack>
        </StyledModal>
      </Blanket>
    );
  }

  const stepCurrentIndex = lastCompletedIndex(requestSteps);
  const stepCurrent = stepCurrentIndex + 1;
  
  const validStepIndex = Math.max(0, Math.min(stepCurrentIndex, requestSteps.length - 1));
  const allStepsCompleted = requestSteps.every(step => step && step.status === ERequestStepsStatus.COMPLETED);
  const showCompleteButton = allStepsCompleted && onComplete;
  
  return (
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s200} width="100%">
          <Stack direction="column" gap={tokens.spacing.s100}>
            <Text type="title" size="medium" weight="bold">
              {title}
            </Text>
            <Divider />
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              size={isMobile ? "small" : "medium"}
              appearance={EComponentAppearance.GRAY}
            >
              {description}
            </Text>
          </Stack>
          <RequestProcessDesktop
            requestSteps={requestSteps}
            iconSize={iconSize}
            stepCurrent={stepCurrent}
            stepCurrentIndex={validStepIndex}
          />
          
          {showCompleteButton && (
              <Stack width="100%" justifyContent="end">
                <Button
                  onClick={onComplete}
                  appearance="success"
                >
                  {registerProgressModal.button.understood}
                </Button>
              </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>
  );
};

export { RequestProcessModal };
