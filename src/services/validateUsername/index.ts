import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";

const validateUsername = async (params: IValidateParams): Promise<IValidate> => {
    const {
          username
    } = params;

    const { data } = await axiosInstance.post<IValidate>('/validate-username', { username });
    return data;
};

export { validateUsername };