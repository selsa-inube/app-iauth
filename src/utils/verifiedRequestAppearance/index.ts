import { EComponentAppearance } from "../../enum/appearances";
import { ERequestStepsStatus } from "../../enum/components/ERequestStepsStatus";
import { verifiedErrorRequest } from "../verifiedErrorRequest";
import { IRequestSteps } from "../../types/components/requestSteps";

export const getRequestAppearance = (
  requestSteps: IRequestSteps[],
  stepCurrentIndex: number,
) => {
  if (!requestSteps || requestSteps.length === 0 || stepCurrentIndex < 0) {
    return {
      appearance: EComponentAppearance.SUCCESS,
      isError: false,
      appearanceProgressBar: EComponentAppearance.SUCCESS,
    };
  }

  const validIndex = Math.max(0, Math.min(stepCurrentIndex, requestSteps.length - 1));
  const currentStep = requestSteps[validIndex];
  
  if (!currentStep || typeof currentStep.status === 'undefined') {
    return {
      appearance: EComponentAppearance.SUCCESS,
      isError: false,
      appearanceProgressBar: EComponentAppearance.SUCCESS,
    };
  }

  const isError = currentStep.status === ERequestStepsStatus.ERROR;

  return {
    appearance: isError
      ? EComponentAppearance.DANGER
      : EComponentAppearance.SUCCESS,
    isError,
    appearanceProgressBar: verifiedErrorRequest(requestSteps)
      ? EComponentAppearance.DANGER
      : EComponentAppearance.SUCCESS,
  };
};
