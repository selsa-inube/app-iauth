import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import type { IOriginatorInstitutionalMessage } from "@ptypes/services/IOriginatorInstitutionalMessage";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Fetches the institutional message for the current originator (provided via interceptor header).
 * Returns null if the backend responds with 204 No Content or if the message is empty.
 */
const getOriginatorInstitutionalMessage = async (): Promise<IOriginatorInstitutionalMessage | null> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchOriginatorInstitutionalMessage",
    },
  };

  const url = "/originator-institutional-messages";

  const response: AxiosResponse<IOriginatorInstitutionalMessage> = await iauthQueryAxiosInstance.get(url, config);

  if (!response || response.status === 204) return null;

  const data = response.data as IOriginatorInstitutionalMessage | undefined;
  if (!data) return null;

  const message = (data.institutionalMessage ?? "").trim();
  if (message.length === 0) return null;

  return data;
};

export { getOriginatorInstitutionalMessage };
