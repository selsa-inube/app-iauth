import { ITextSize } from '@ptypes/components/ITextSize';
import type { UserData } from '@ptypes/hooks/useValidationToken/IUserData';
import type { IRegisterLabels } from '@ptypes/config/register/IRegisterLabels';

interface IRegisterUI {
  labelsSize: ITextSize;
  userData: UserData;
  isMobile?: boolean;
  labels: IRegisterLabels;
  currentStep?: string;
}

export type { IRegisterUI };
