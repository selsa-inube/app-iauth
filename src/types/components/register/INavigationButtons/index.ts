interface INavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  labels: {
    previous: string;
    next: string;
    submit: string;
  };
  isNextDisabled?: boolean;
  isSubmitDisabled?: boolean;
}

export type { INavigationButtonsProps };
