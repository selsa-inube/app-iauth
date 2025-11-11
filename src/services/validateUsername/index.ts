import { IValidationsUsername } from "@ptypes/api/IValidationsUsername";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { axiosInstance } from "@api/auth";
import { AxiosRequestConfig } from "axios";

const validateUsername = async (
  props: IValidateParams,
): Promise<IValidationsUsername> => {


  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchUserForAuthentication",
    },
  };

  const url = "/user-accounts";
  const requestBody = { userAccount: props.username };

  const response = await axiosInstance.post<IValidationsUsername>(
    url,
    requestBody,
    config,
  );

  if (response.status === 200 && response.data) {
    return {
      status: response.status,
      userAccount: response.data.userAccount,
      safetyPhrase: response.data.safetyPhrase,
      securityImageUrl: response.data.securityImageUrl,
      urlSecuritySignedImage: response.data.urlSecuritySignedImage,
    };
  }

  return { status: response.status, userAccount: "", safetyPhrase: "", securityImageUrl: "", urlSecuritySignedImage: "" };
};

export { validateUsername };
