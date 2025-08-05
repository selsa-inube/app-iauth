import { IValidationsUsername } from "@ptypes/api/IValidationsUsername";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import { AxiosRequestConfig } from "axios";

const validateUsername = async (
  params: IValidateParams,
): Promise<IValidationsUsername> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Business-Unit": "test",
      "X-Action": "SearchAllUserAccount",
    },
  };
  const { status } = await iauthQueryAxiosInstance.get<IValidationsUsername>(
    `/user-accounts/?userAccount=${params.username}`,
    config,
  );

  return { status };
};

export { validateUsername };
