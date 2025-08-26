import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

interface IRegisterUserParams {
  formData: IRegisterFormData;
  userData: UserData;
  originatorId?: string;
  originatorCode?: string;
}

export type { IRegisterUserParams };
