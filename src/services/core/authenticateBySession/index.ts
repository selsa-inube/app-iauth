import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IAuthenticateBySessionParams } from "@ptypes/services/core/IAuthenticateBySessionParams";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const authenticateBySession = async (
  params: IAuthenticateBySessionParams,
): Promise<IValidate | null> => {
  const { state, callbackUrl, codeChallenge } = params;

  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "AutenticationBySession",
    },
  };

  const url = "/user-accounts/";

  const requestBody = {
    state,
    callbackUrl,
    codeChallenge,
  };

  const response = (await axiosInstance.post(
    url,
    requestBody,
    config,
  )) as AxiosResponse<IValidate>;

  if (response?.status === 200) {
    return response.data;
  }

  return null;
};

export { authenticateBySession };
