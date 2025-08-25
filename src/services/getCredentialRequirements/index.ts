import { ICredentialRequirementResponse } from "@ptypes/api/ICredentialRequirementResponse";
import { ICredentialRequirementParams } from "@ptypes/api/ICredentialRequirementParams";
// import { iauthQueryAxiosInstance } from "@api/iauthQuery";
// import { AxiosRequestConfig } from "axios";

const getCredentialRequirements = async (
  params: ICredentialRequirementParams,
): Promise<ICredentialRequirementResponse> => {
  // TODO: Implementar petición real cuando esté lista la API
  // const config: AxiosRequestConfig = {
  //   headers: {
  //     "X-Business-Unit": "test",
  //     "X-Action": "SearchCredentialRequirement",
  //   },
  // };

  // const queryParams = new URLSearchParams();
  // if (params.originatorId) {
  //   queryParams.append('originatorId', params.originatorId);
  // }
  // if (params.originatorCode) {
  //   queryParams.append('originatorCode', params.originatorCode);
  // }

  // const url = `/iauth-query-process-service-service/api/originators?${queryParams.toString()}`;
  // const { data } = await iauthQueryAxiosInstance.get<ICredentialRequirementResponse>(url, config);
  // return data;

  console.log("Fetching credential requirements for:", params);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    policyForTheUserKey: "HighLevel",
    requirements: [
      {
        value: "Minimum length of 8 characters",
        regex: "^.{8,}$",
      },
      {
        value: "Mandatory combination of letters and numbers",
        regex: `^(?=.*[A-Za-z])(?=.*\\d).+$`,
      },
      {
        value: "A mandatory capital letter",
        regex: "^(?=.*[A-Z]).+$",
      },
      {
        value: "A special character (*,%,-,&,$,?,+)",
        regex: `^(?=.*[*%\\-&$?+]).+$`,
      },
    ],
  };
};

export { getCredentialRequirements };
