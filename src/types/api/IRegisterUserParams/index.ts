import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

interface IRegisterUserParams {
  formData: IRegisterFormData;
  userData: UserData;
}

export type { IRegisterUserParams };
