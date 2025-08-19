import { Button, Stack } from "@inubekit/inubekit";

interface INavigationButtonsUIProps {
  isFirstStep: boolean;
  isLastStep: boolean;
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

const NavigationButtonsUI = (props: INavigationButtonsUIProps) => {
  const {
    isFirstStep,
    isLastStep,
    onBack,
    onNext,
    onSubmit,
    labels,
    isNextDisabled = false,
    isSubmitDisabled = false,
  } = props;

  return (
    <Stack direction="row" gap="16px" justifyContent="flex-end" width="100%">
      {!isFirstStep && (
        <Button onClick={onBack} variant="outlined" appearance="gray">
          {labels.previous}
        </Button>
      )}

      {!isLastStep && (
        <Button onClick={onNext} variant="filled" disabled={isNextDisabled}>
          {labels.next}
        </Button>
      )}

      {isLastStep && (
        <Button onClick={onSubmit} variant="filled" disabled={isSubmitDisabled}>
          {labels.submit}
        </Button>
      )}
    </Stack>
  );
};

export { NavigationButtonsUI };
