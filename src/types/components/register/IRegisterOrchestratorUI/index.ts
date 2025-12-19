import { ReactElement } from "react";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";
import type { IStep } from "@ptypes/components/register/IFormContainer";
import type { ITextSize } from "@ptypes/components/ITextSize";

interface IRegisterOrchestratorUI {
  labelsSize: ITextSize;
  isMobile: boolean;
  labels: IRegisterStepLabels;
  currentStep: IStep;
  totalSteps: number;
  isNextEnabled: boolean;
  formData: IRegisterFormData;
  currentStepComponent: ReactElement | null;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export type { IRegisterOrchestratorUI };
