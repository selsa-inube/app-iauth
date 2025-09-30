import { ERequestStepsStatus } from "../../enum/components/ERequestStepsStatus";
import { IRequestSteps } from "../../types/components/requestSteps";

const verifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  if (!requests || requests.length === 0) {
    return false;
  }

  return requests.find((request) => request && request.status === ERequestStepsStatus.ERROR)
    ? true
    : false;
};

export { verifiedErrorRequest };
