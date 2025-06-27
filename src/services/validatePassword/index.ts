import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { mapValidatePassword } from "./mapper";
import { IValidatePassword } from "@ptypes/services/IValidatePassword";
import { AxiosResponse } from 'axios';
const validatePassword = async ( params:IValidateParams ): Promise<IValidate> => {
    const {
        password,
        username
    } = params;
    
    const response: AxiosResponse<IValidatePassword>  = await axiosInstance.post<IValidatePassword>('/validate-password', { username, password });
    const data: IValidatePassword = response.data;
    
    return mapValidatePassword(data);
};

export { validatePassword };
