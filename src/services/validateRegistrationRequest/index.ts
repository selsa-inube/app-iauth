import { axiosInstance } from "@api/auth";
import { IValidateRegistrationResponse } from "@ptypes/services/IValidateRegistrationResponse";
import { IValidateRegistrationErrorResponse } from "@ptypes/services/IValidateRegistrationErrorReponse";
import { IValidateRegistrationRequest } from "@ptypes/services/IValidateRegistrationRequest.ts";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import type { ValidationResult } from "@ptypes/hooks/useValidationToken/IValidationResult";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

const validateRegistrationRequest = async (
  token: string,
): Promise<ValidationResult> => {
  const url = "/user-account-management-requests/valid";
  const body : IValidateRegistrationRequest = { userManagementRequestsIdEncrypt: token };
  const config : AxiosRequestConfig = {
    headers: {
      "X-Action": "ValidateRegistrationRequest",
    },
  };

  const response: AxiosResponse<IValidateRegistrationResponse | IValidateRegistrationErrorResponse> =
    await axiosInstance.post(url, body, config);

  const { status, data } = response;

  if (status >= 200 && status < 300 && data && !(<IValidateRegistrationErrorResponse>data).code) {
    const success = data as IValidateRegistrationResponse;
    const userData: UserData = {
      identificationType: success.identificationType ?? "",
      identificationNumber: success.identificationNumber ?? "",
      firstNames: success.firstNames ?? "",
      lastNames: success.lastNames ?? "",
      originatorCode: success.originatorCode,
      originatorName: success.originatorName,
      consumerApplicationCode: success.consumerApplicationCode ?? "",
      userManagementRequestsId: success.userManagementRequestsId ?? "",
      userManagementRequestsIdEncrypt: token,
      registrationRedirectUrl: success.registrationRedirectUrl
    };

    return { type: "VALID_USER_DATA", userData } as ValidationResult;
  }
  const err = data as IValidateRegistrationErrorResponse | undefined;
  if (err && err.code) {
    if (err.code === "C001004") {
      return { type: "LINK_EXPIRED" } as ValidationResult;
    }
    if (err.code === "C001008") {
      return { type: "USER_ALREADY_REGISTERED" } as ValidationResult;
    }
    return { type: "LINK_EXPIRED" } as ValidationResult;
  }
  return { type: "LINK_EXPIRED" } as ValidationResult;
};

export { validateRegistrationRequest };
