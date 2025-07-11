import axios, { AxiosInstance } from "axios";
import { isaasQueryProcessService, fetchTimeoutServices } from "@config/environment";

const isaasQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: isaasQueryProcessService,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

isaasQueryAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  },
);

export { isaasQueryAxiosInstance };
