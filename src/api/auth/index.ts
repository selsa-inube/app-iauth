import axios, { AxiosInstance } from "axios";
import { AUTH_API_URL, fetchTimeoutServices } from "@config/environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: AUTH_API_URL,
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


