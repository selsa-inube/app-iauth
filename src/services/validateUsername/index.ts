import { axiosInstance } from "@api/auth";
import { IValidateUsername } from "@ptypes/api/IValidateUsername";

const validateUsername = async (username: string): Promise<IValidateUsername> => {
  
    const { data } = await axiosInstance.post<IValidateUsername>('/api/validate-username', { username });
    return data;

};

export { validateUsername };