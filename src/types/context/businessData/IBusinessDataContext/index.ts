import { IOriginatorSuccess } from "@ptypes/api/IOriginatorSuccess";

interface IBusinessDataContext {
  originatorData: IOriginatorSuccess | null;
  isLoading: boolean;
  error: string | null;
  fetchOriginatorData: (originatorId?: string, originatorCode?: string) => Promise<void>;
}

export type { IBusinessDataContext };
