import type { IRegisterUserParams } from "@ptypes/api/IRegisterUserParams";
import type { IRegisterUserResponse } from "@ptypes/api/IRegisterUserResponse";

interface IUseRegisterUser {
  registerUserSubmit: (params: IRegisterUserParams) => Promise<IRegisterUserResponse>;
  isLoading: boolean;
  error: string | null;
}

export type { IUseRegisterUser };

