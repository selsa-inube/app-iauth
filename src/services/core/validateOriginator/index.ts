import {iauthQueryAxiosInstance} from "@api/iauthQuery";
import { IValidateOriginatorParams } from "@ptypes/services/core/IValidateOriginatorParams";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const validateOriginator = async (
  params: IValidateOriginatorParams,
): Promise<boolean> => {
  const { applicationName, callbackUrl, originatorId } = params;

  if (!originatorId) {
    throw new Error("Missing originator identifier");
  }

  const queryParams = new URLSearchParams();
  queryParams.append("applicationName", applicationName);
  queryParams.append("callbackUrl", callbackUrl);
  queryParams.append("originatorId", originatorId);

  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchValidOriginator",
    },
  };

  const url = `/originators/valid?${queryParams.toString()}`;
  const response = (await iauthQueryAxiosInstance.get(url, config)) as AxiosResponse;

  return response?.status === 204;
};

export { validateOriginator };
