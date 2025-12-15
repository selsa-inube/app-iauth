import { axiosInstance } from "@api/auth";
import { AxiosRequestConfig } from "axios";

const logout = async (): Promise<boolean> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "Logout",
    },
  };

  const response = await axiosInstance.delete("/user-accounts/logout", config);

  return response?.status === 204;
};

export { logout };
