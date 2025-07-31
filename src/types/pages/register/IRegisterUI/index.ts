import { TextSize } from '@ptypes/components/TextSize';
import type { UserData } from '@ptypes/hooks/useValidationToken/IUserData';
import type { IRegisterLabels } from '@ptypes/config/register/IRegisterLabels';

interface IRegisterUI {
  labelsSize: TextSize;
  userData: UserData;
  isMobile?: boolean;
  labels: IRegisterLabels;
  currentStep?: string;
}

export type { IRegisterUI };
