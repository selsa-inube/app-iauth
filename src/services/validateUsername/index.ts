import { IValidationsUsername } from "@ptypes/api/IValidationsUsername";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import { AxiosRequestConfig } from "axios";

const validateUsername = async (
  props: IValidateParams,
): Promise<IValidationsUsername> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchUserForAutentication",
    },
  };
  
  const response = await iauthQueryAxiosInstance.get<IValidationsUsername>(
    `/user-accounts?userAccount=${props.username}`,
    config,
  );

  if (response.status === 200 && response.data) {
    return {
      status: response.status,
      userAccount: response.data.userAccount,
      safetyPhrase: response.data.safetyPhrase,
      securityImageUrl: response.data.securityImageUrl,
    };
  }

  return { status: response.status, userAccount: "", safetyPhrase: "", securityImageUrl: "" };
};

export { validateUsername };
