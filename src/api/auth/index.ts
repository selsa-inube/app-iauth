import axios, { AxiosInstance } from "axios";
import { environment, fetchTimeoutServices } from "@config/environment";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: environment.AUTH_API_URL,
    timeout: fetchTimeoutServices,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  }
);

export { axiosInstance };


