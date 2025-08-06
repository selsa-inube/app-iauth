import axios, { AxiosInstance } from "axios";
import {
  iauthQueryProcessService,
  fetchTimeoutServices,
} from "@config/environment";

const iauthQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: iauthQueryProcessService!,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

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
