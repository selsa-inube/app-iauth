import axios, { AxiosInstance } from "axios";
import { iauthQueryProcessService, fetchTimeoutServices } from "@config/environment";

const iauthQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: iauthQueryProcessService,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "X-Business-Unit": "test",
    "X-Action": "SearchAllUserAccount",
  },
});

iauthQueryAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  },
);

export { iauthQueryAxiosInstance };
