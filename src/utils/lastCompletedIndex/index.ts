import { ERequestStepsStatus } from "../../enum/components/ERequestStepsStatus";
import { IRequestSteps } from "../../types/components/requestSteps";

const lastCompletedIndex = (requestSteps: IRequestSteps[]): number => {
  if (!requestSteps || requestSteps.length === 0) {
    return -1;
  }

  let lastCompletedIndex = -1;
  
  for (let i = 0; i < requestSteps.length; i++) {
    const step = requestSteps[i];
    if (step && (step.status === ERequestStepsStatus.COMPLETED || 
        step.status === ERequestStepsStatus.ERROR)) {
      lastCompletedIndex = i;
    } else {
      break;
    }
  }
  
  return lastCompletedIndex;
};

export { lastCompletedIndex };
