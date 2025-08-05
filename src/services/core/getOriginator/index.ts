import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import { IOriginatorSuccess } from "@ptypes/api/IOriginator";
import { AxiosRequestConfig } from "axios";

interface IGetOriginatorParams {
  originatorId?: string;
  originatorCode?: string;
}

const getOriginator = async (
  params: IGetOriginatorParams,
): Promise<IOriginatorSuccess> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Business-Unit": "test",
      "X-Action": "SearchValidOriginator",
    },
  };

  // Construir query params
  const queryParams = new URLSearchParams();
  if (params.originatorId) {
    queryParams.append("originatorId", params.originatorId);
  }
  if (params.originatorCode) {
    queryParams.append("originatorCode", params.originatorCode);
  }

  const queryString = queryParams.toString();
  const url = `/originators${queryString ? `?${queryString}` : ""}`;

  const { data } = await iauthQueryAxiosInstance.get<IOriginatorSuccess>(
    url,
    config,
  );

  return data;
};

export { getOriginator };
export type { IGetOriginatorParams };
