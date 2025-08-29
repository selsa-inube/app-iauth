import { IRegisterUserParams } from "../../types/api/IRegisterUserParams";
import { IRegisterUserResponse } from "../../types/api/IRegisterUserResponse";
import { ISaveUserAccountRequest } from "@ptypes/services/ISaveUserAccountRequest";
import { axiosInstance } from "@api/auth";
import { AxiosRequestConfig } from "axios";

const registerUser = async (
  params: IRegisterUserParams,
): Promise<IRegisterUserResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Business-Unit": "test",
      "X-Action": "SaveUserAccount",
    },
  };
  const body: ISaveUserAccountRequest = {
    userManagementRequestsId: params.userData.userManagementRequestsId,
    accountName: params.formData.username,
    email: params.formData.email,
    identificationNumber: params.userData.identificationNumber,
    identificationType: params.userData.identificationType,
    names: params.userData.firstNames,
    surnames: params.userData.lastNames,
    userAccount: params.formData.username,
    userPhoneNumber: params.formData.phone,
    consumerApplicationCode: params.userData.consumerApplicationCode ?? "",
    mainOriginatorCode: params.userData.originatorCode ?? "",
    ...(Object.entries(params.formData.securityAnswers || {}).length > 0 && {
      securityQuestions: Object.entries(
        params.formData.securityAnswers || {},
      ).map(([key, value]) => ({
        securityQuestionNumber: key,
        securityQuestionAnswer: value,
      })),
    }),
    userAccountAuthenticationMethod: {
      authenticationCredential: params.formData.password,
      authenticationMethod: "Credentials",
      updateDate: new Date().toISOString(),
    },
    userConsentOfScopeAttribute: {
      attributeIncludedInConsent: "True",
      dateOfConsent: new Date().toISOString(),
    },
    accountNumberPerMessageOperator: {
      messageOperator:
        !params.formData.isWhatsappUsed && params.formData.whatsappPhoneDialCode
          ? params.formData.whatsappPhoneDialCode.replace("+", "")
          : params.formData.phoneDialCode.replace("+", ""),
      messagingAccountNumber:
        !params.formData.isWhatsappUsed && params.formData.whatsappPhone
          ? params.formData.whatsappPhone
          : params.formData.phone,
    },
  };

  const url = "/user-accounts/";
  const response = await axiosInstance.post<
    ISaveUserAccountRequest,
    any,
    ISaveUserAccountRequest
  >(url, body, config);
  const { data, status } = response;

  if (status >= 200 && status < 300) {
    const resp: IRegisterUserResponse = {
      success: true,
      message: "Usuario registrado exitosamente",
      userId: data?.userAccountId ?? data?.userAccount ?? undefined,
    };
    return resp;
  }

  const errMsg =
    data?.message ??
    data?.description ??
    `Server responded with status ${status}`;
  return {
    success: false,
    message: errMsg,
    errorCode: data?.code ?? undefined,
  };
};

export { registerUser };
