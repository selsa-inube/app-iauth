import { ISaveUserAccountRequest } from "@ptypes/services/ISaveUserAccountRequest";
import { axiosInstance } from "@api/auth";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import type { IValidateRegistrationErrorResponse } from "@ptypes/services/IValidateRegistrationErrorReponse";
import type { ISaveUserAccountResponse } from "@ptypes/services/ISaveUserAccountResponse";
import { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";
import { IRegisterUserResponse } from "@ptypes/api/IRegisterUserResponse";

const registerUser = async (
  params: IRegisterUserParams,
): Promise<IRegisterUserResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
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
      securityQuestions: Object.entries(params.formData.securityAnswers || {})
        .map(([key, value]) => ({
          securityQuestionNumber: key,
          securityQuestionAnswer: value,
        }))
        .filter(
          (question) =>
            question.securityQuestionAnswer !== undefined &&
            question.securityQuestionAnswer !== null &&
            question.securityQuestionAnswer !== "",
        ),
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
    userManagementRequestsIdEncrypt: params.userData.userManagementRequestsIdEncrypt,
  };

  const url = "/user-accounts/";
  const response = (await axiosInstance.post(
    url,
    body,
    config,
  )) as AxiosResponse<
    ISaveUserAccountResponse | IValidateRegistrationErrorResponse
  >;
  const { data, status } = response;

  if (
    status >= 200 &&
    status < 300 &&
    !(data as IValidateRegistrationErrorResponse)?.code
  ) {
    const resp: IRegisterUserResponse = {
      success: true,
      message: "Usuario registrado exitosamente",
      userId:
        (data as ISaveUserAccountResponse)?.userAccountId ??
        (data as ISaveUserAccountResponse)?.userAccount ??
        undefined,
    };
    return resp;
  }

  const errData = data as IValidateRegistrationErrorResponse | undefined;
  const errMsg =
    errData?.message ??
    errData?.description ??
    `Server responded with status ${status}`;
  return {
    success: false,
    message: errMsg,
    errorCode: errData?.code ?? undefined,
  };
};

export { registerUser };
