import { ICredentialRequirementResponse } from "@ptypes/api/ICredentialRequirementResponse";
import { ICredentialRequirementParams } from "@ptypes/api/ICredentialRequirementParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import { AxiosRequestConfig } from "axios";

const getCredentialRequirements = async (
  params: ICredentialRequirementParams,
): Promise<ICredentialRequirementResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Business-Unit": "test",
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
  const { data } = await iauthQueryAxiosInstance.get<ICredentialRequirementResponse>(url, config);
  return data;
};

export { getCredentialRequirements };
