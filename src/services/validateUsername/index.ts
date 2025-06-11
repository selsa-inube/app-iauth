import { axiosInstance } from "@api/auth";
import { IValidateUsername } from "@ptypes/api/IValidateUsername";

const validateUsername = async (username: string): Promise<IValidateUsername> => {
  
    const response = await axiosInstance.post<IValidateUsername>('/api/validate-username', { username });
    return response.data;

};

export { validateUsername };