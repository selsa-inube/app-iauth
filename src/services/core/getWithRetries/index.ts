import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { fetchTimeoutServices } from "@config/environment";

const getWithRetries = async <T>(
  axiosInstance: AxiosInstance,
  url: string,
  config: AxiosRequestConfig,
): Promise<T> => {
  const maxRetries = fetchTimeoutServices;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        config,
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
      } else {
        console.error(`Attempt ${attempt} failed: ${String(error)}`);
      }
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  throw new Error("failed to fetch data after many retries");
};

export { getWithRetries };
