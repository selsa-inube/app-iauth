import type { ICredentialRequirementApiRequirement } from "@ptypes/services/ICredentialRequirementApiRequirement";

interface ICredentialRequirementApiResponse {
  policyForTheUserKey: string;
  requirements: ICredentialRequirementApiRequirement[];
}

export type { ICredentialRequirementApiResponse };

