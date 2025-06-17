import { axiosInstance } from "@api/auth";
import { IValidatePassword } from "@ptypes/api/IValidatePassword";

const validatePassword = async (password: string, username: string | undefined): Promise<IValidatePassword> => {
    const { data } = await axiosInstance.post<IValidatePassword>('/api/validate-password', { username, password });
    return data;
};

export { validatePassword };
