import { FormContainer } from "../FormContainer";
import { NavigationButtons } from "../NavigationButtons";
import { StyledStepContainer } from "./styles";
import type { IRegisterOrchestratorUI } from "@ptypes/components/register/IRegisterOrchestratorUI";

const RegisterOrchestratorUI = (props: IRegisterOrchestratorUI) => {
  const {
    labelsSize,
    isMobile,
    labels,
    currentStep,
    totalSteps,
    isNextEnabled,
    formData,
    currentStepComponent,
    onBack,
    onNext,
    onSubmit,
  } = props;

  return (
    <FormContainer
      title="Registro de Usuario"
      labelsSize={labelsSize}
      isMobile={isMobile}
      showAssisted={isMobile ? false : true}
      step={currentStep}
      totalSteps={totalSteps}
      onBackClick={onBack}
      onNextClick={onNext}
      onSubmitClick={onSubmit}
      disableNext={!isNextEnabled}
      disableSubmit={
        !formData.dataTreatmentAccepted || !formData.dataIdentityAccepted
      }
      controls={{
        goBackText: labels.buttons.previous,
        goNextText: labels.buttons.next,
        submitText: labels.buttons.submit,
      }}
      assistedSize="large"
      showCurrentStepNumber={false}
    >
      <StyledStepContainer>
        {currentStepComponent}

        <NavigationButtons
          currentStep={currentStep.number}
          totalSteps={totalSteps}
          onBack={onBack}
          onNext={onNext}
          onSubmit={onSubmit}
          labels={labels.buttons}
          isNextDisabled={!isNextEnabled}
          isSubmitDisabled={
            !formData.dataTreatmentAccepted || !formData.dataIdentityAccepted
          }
        />
      </StyledStepContainer>
    </FormContainer>
  );
};

export { RegisterOrchestratorUI };
