import axios, { AxiosInstance } from "axios";
import { ISAAS_QUERY_PROCESS_SERVICE, fetchTimeoutServices } from "@config/environment";

const isaasQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: ISAAS_QUERY_PROCESS_SERVICE,
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
