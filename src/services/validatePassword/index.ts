import { axiosInstance } from "@api/auth";
import { IValidate } from "@ptypes/api/IValidations";
import { IValidateParams } from "@ptypes/api/IValidationsParams";
import { CALLBACKURL } from "@config/environment";

const validatePassword = async ( params:IValidateParams ): Promise<IValidate> => {
    let {
        password,
        username
    } = params;
    
    if (password && username) {
        password = btoa(password);
        username = btoa(username);
    }
    
    const data = await axiosInstance.post<IValidate>('/user-accounts/', { userAccount: username, authenticationCredential: password, callbackUrl: CALLBACKURL });
    return data;
};

export { validatePassword };