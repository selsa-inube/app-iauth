import { ERequestStepsStatus } from "@enum/components/ERequestStepsStatus";
import { IRequestSteps } from "@ptypes/components/requestSteps";

const countVerifiedRequests = (requests: IRequestSteps[]) => {
  if (!requests || requests.length === 0) {
    return 0;
  }

  const countVerified = requests.filter(
    (request) =>
      request && 
      (request.status === ERequestStepsStatus.COMPLETED ||
      request.status === ERequestStepsStatus.ERROR),
  ).length;
  
  return (countVerified * 100) / requests.length;
};

export { countVerifiedRequests };
