import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import { IOriginatorSuccess } from "@ptypes/api/IOriginatorSuccess";
import { IGetOriginator } from "@ptypes/services/core/IGetOriginator";
import { AxiosRequestConfig } from "axios";

const getOriginator = async (
  props: IGetOriginator,
): Promise<IOriginatorSuccess> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchGeneralOriginator",
    },
  };

  const queryParams = new URLSearchParams();
  if (props.originatorId) {
    queryParams.append("originatorId", props.originatorId);
  }
  if (props.originatorCode) {
    queryParams.append("originatorCode", props.originatorCode);
  }

  const queryString = queryParams.toString();
  const url = `/originators/valid${queryString ? `?${queryString}` : ""}`;

  const { data } = await iauthQueryAxiosInstance.get<IOriginatorSuccess>(
    url,
    config,
  );
  return data;
};

export { getOriginator };
