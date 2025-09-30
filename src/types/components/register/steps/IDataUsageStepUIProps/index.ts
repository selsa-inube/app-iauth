import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import { UserData } from "@ptypes/hooks/useValidationToken/IUserData";

interface IDataUsageStepUI {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  userData: UserData;
  onDataTreatmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDataIdentityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
}

export type { IDataUsageStepUI };
