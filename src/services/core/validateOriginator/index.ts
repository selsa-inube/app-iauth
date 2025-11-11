import { axiosInstance } from "@api/auth";
import { IValidateOriginatorParams } from "@ptypes/services/core/IValidateOriginatorParams";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const validateOriginator = async (
  params: IValidateOriginatorParams,
): Promise<boolean> => {
  const { applicationName, callbackUrl, originatorId } = params;

  if (!originatorId) {
    throw new Error("Missing originator identifier");
  }

  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchValidOriginator",
    },
  };

  const url = "/originators/valid";

  const requestBody = {
    originatorId,
    applicationName,
    callbackUrl,
  };

  const response = (await axiosInstance.post(
    url,
    requestBody,
    config,
  )) as AxiosResponse;

  return response?.status === 200;
};

export { validateOriginator };
