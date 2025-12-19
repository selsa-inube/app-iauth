import axios, { AxiosInstance } from "axios";
import {
  iauthQueryProcessService,
  fetchTimeoutServices,
} from "@config/environment";
import { setupOriginatorCodeInterceptor } from "@api/originatorCodeInterceptor";

const iauthQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: iauthQueryProcessService!,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

setupOriginatorCodeInterceptor(iauthQueryAxiosInstance);

iauthQueryAxiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Request timed out");
      }
      return Promise.resolve(error.response);
    }
    return Promise.reject(new Error("Unknown error occurred"));
  },
);

export { iauthQueryAxiosInstance };
