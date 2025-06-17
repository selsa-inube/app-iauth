import { axiosInstance } from "@api/auth";
import { IValidatePassword } from "@ptypes/api/validatePassword/IValidatePassword";
import { IValidatePasswordParams } from "@ptypes/api/validatePassword/IValidatePasswordParams";

const validatePassword = async ( params:IValidatePasswordParams ): Promise<IValidatePassword> => {
    const {
        password,
        username
    } = params;
    
    const { data } = await axiosInstance.post<IValidatePassword>('/api/validate-password', { username, password });
    return data;
};

export { validatePassword };
