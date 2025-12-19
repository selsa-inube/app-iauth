import { IAuthParams } from "@ptypes/hooks/useAuthParams/IAuthParams";

interface IUseAuthParams extends IAuthParams {
  hasMissingParams: boolean;
  searchParams: URLSearchParams;
}

export type { IUseAuthParams };
