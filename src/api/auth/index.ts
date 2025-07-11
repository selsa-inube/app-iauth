import axios, { AxiosInstance } from "axios";
import { authApiUrl, fetchTimeoutServices } from "@config/environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: authApiUrl,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "X-Business-Unit": "test",
    "X-Action": "AutenticationByCredential",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.resolve(error.response.data);
  }
);

export { axiosInstance };


