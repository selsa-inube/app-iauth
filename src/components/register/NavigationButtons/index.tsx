import { NavigationButtonsUI } from "./interface";
import type { INavigationButtonsProps } from "@ptypes/components/register/INavigationButtons";

const NavigationButtons = (props: INavigationButtonsProps) => {
  const {
    currentStep,
    totalSteps,
    onBack,
    onNext,
    onSubmit,
    labels,
    isNextDisabled = false,
    isSubmitDisabled = false,
  } = props;

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <NavigationButtonsUI
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      onBack={onBack}
      onNext={onNext}
      onSubmit={onSubmit}
      labels={labels}
      isNextDisabled={isNextDisabled}
      isSubmitDisabled={isSubmitDisabled}
    />
  );
};

export { NavigationButtons };
