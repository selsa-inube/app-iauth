import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";

const validatePassword = async ( params:IValidateParams ): Promise<IValidate> => {
    const {
        password,
        username
    } = params;
    
    const { data } = await axiosInstance.post<IValidate>('/api/validate-password', { username, password });
    return data;
};

export { validatePassword };
