import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IRegisterLabels } from "@ptypes/config/register/IRegisterLabels";

interface IUserWelcome {
  userData: UserData;
  labels: IRegisterLabels;
}

export type { IUserWelcome };
