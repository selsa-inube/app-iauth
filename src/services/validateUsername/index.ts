import { axiosInstance } from "@api/auth";
import { IValidateUsername } from "@ptypes/api/validateUsername/IValidateUsername";
import { IValidateUsernameParams } from "@ptypes/api/validateUsername/IValidateUsernameParams";

const validateUsername = async (params: IValidateUsernameParams): Promise<IValidateUsername> => {
    const {
          username
    } = params;
    
    const { data } = await axiosInstance.post<IValidateUsername>('/api/validate-username', { username });
    return data;

};

export { validateUsername };