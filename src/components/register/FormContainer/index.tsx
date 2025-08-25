import type { IFormContainer } from "@ptypes/components/register/IFormContainer";
import {
  StyledFormContainer,
  StyledFormTitle,
  StyledAssistedContainer,
} from "./styles";
import { Divider, Assisted } from "@inubekit/inubekit";

const FormContainer = (props: IFormContainer) => {
  const {
    isMobile,
    children,
    title,
    labelsSize,
    showAssisted = false,
    step,
    totalSteps,
    onBackClick,
    onNextClick,
    onSubmitClick,
    disableBack = false,
    disableNext = false,
    disableSubmit = false,
    showCurrentStepNumber = true,
    controls,
    assistedSize = "large",
  } = props;

  return (
    <StyledFormContainer $isMobile={isMobile}>
      {title && (
        <StyledFormTitle $labelsSize={labelsSize ?? "medium"}>
          {title}
        </StyledFormTitle>
      )}
      {showAssisted && <Divider marginBottom="1rem" />}

      {showAssisted &&
        step &&
        totalSteps &&
        onBackClick &&
        onNextClick &&
        onSubmitClick && (
          <StyledAssistedContainer>
            <Assisted
              step={step}
              totalSteps={totalSteps}
              onBackClick={onBackClick}
              onNextClick={onNextClick}
              onSubmitClick={onSubmitClick}
              disableBack={disableBack}
              disableNext={disableNext}
              disableSubmit={disableSubmit}
              showCurrentStepNumber={showCurrentStepNumber}
              controls={controls}
              size={assistedSize}
            />
          </StyledAssistedContainer>
        )}

      {children}
    </StyledFormContainer>
  );
};

export { FormContainer };
