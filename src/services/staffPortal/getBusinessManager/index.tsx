import { AxiosRequestConfig } from "axios";
import type { IBusinessManagers } from "@ptypes/services/staffPortal/IBusinessManagers";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/auth";
import { mapBusinessManagerApiToEntity } from "./mappers";

const getBusinessManagers = async (
  businessManagerId: string,
): Promise<IBusinessManagers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdBusinessManager",
    },
  };
  const data: IBusinessManagers = await getWithRetries<IBusinessManagers>(
    axiosInstance,
    `/business-managers/${businessManagerId}`,
    config,
  );
  return mapBusinessManagerApiToEntity(data);
};

export { getBusinessManagers };
