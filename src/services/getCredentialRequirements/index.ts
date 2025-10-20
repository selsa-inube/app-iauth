import { ICredentialRequirementResponse } from "@ptypes/api/ICredentialRequirementResponse";
import { ICredentialRequirementParams } from "@ptypes/api/ICredentialRequirementParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import type { ICredentialRequirementApiResponse } from "@ptypes/services/ICredentialRequirementApiResponse";
import { AxiosRequestConfig } from "axios";

const getCredentialRequirements = async (
  params: ICredentialRequirementParams,
): Promise<ICredentialRequirementResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchCredentialRequirement",
    },
  };

  const queryParams = new URLSearchParams();
  if (params.originatorId) {
    queryParams.append("originatorId", params.originatorId);
  }
  if (params.originatorCode) {
    queryParams.append("originatorCode", params.originatorCode);
  }

  const url = `/originators?${queryParams.toString()}`;
  const { data } = await iauthQueryAxiosInstance.get<ICredentialRequirementApiResponse>(url, config);
  const mapped: ICredentialRequirementResponse = {
    policyForTheUserKey: data.policyForTheUserKey,
    requirements: data.requirements.map((req) => ({
      value: req.i18n?.es ?? req.value,
      regex: req.regex,
    })),
  };

  return mapped;
};

export { getCredentialRequirements };
