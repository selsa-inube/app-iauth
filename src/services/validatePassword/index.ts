import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { callbackUrl as defaultCallbackUrl } from "@config/environment";

const validatePassword = async (
  params: IValidateParams,
): Promise<IValidate> => {
  let { password, username } = params;
  const { callbackUrl } = params;
  if (password && username) {
    password = btoa(password);
    username = btoa(username);
  }

  const finalCallbackUrl: string = callbackUrl ?? defaultCallbackUrl ?? "";

  const { data } = await axiosInstance.post<IValidate>("/user-accounts/", {
    userAccount: username,
    authenticationCredential: password,
    callbackUrl: finalCallbackUrl,
  });
  return data;
};

export { validatePassword };
