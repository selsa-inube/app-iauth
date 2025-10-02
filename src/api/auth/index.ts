import axios, { AxiosInstance } from "axios";
import { authApiUrl, fetchTimeoutServices } from "@config/environment";
import { setupOriginatorCodeInterceptor } from "@api/originatorCodeInterceptor";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: authApiUrl as string,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

setupOriginatorCodeInterceptor(axiosInstance);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Request timed out");
      }
      return Promise.resolve(error.response);
    }
    return Promise.resolve(error);
  },
);

export { axiosInstance };
