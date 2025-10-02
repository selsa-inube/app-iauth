import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { callbackUrl as defaultCallbackUrl } from "@config/environment";
import { AxiosRequestConfig } from "axios";

const validatePassword = async (props: IValidateParams): Promise<IValidate> => {
  let { password, username } = props;
  const { callbackUrl, state, codeChallenge } = props;
  if (password && username) {
    password = btoa(password);
    username = btoa(username);
  }
  const config: AxiosRequestConfig = {
      headers: {
        "X-Action": "AutenticationByCredential",
      },
    };

  const finalCallbackUrl: string = callbackUrl ?? defaultCallbackUrl ?? "";

  const { data } = await axiosInstance.post<IValidate>("/user-accounts/", {
    userAccount: username,
    authenticationCredential: password,
    state: state,
    codeChallege: codeChallenge,
    callbackUrl: finalCallbackUrl,
  }, config);
  return data;
};

export { validatePassword };
