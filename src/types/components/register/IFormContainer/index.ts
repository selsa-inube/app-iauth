import { ReactNode } from "react";
import { ITextSize } from "@ptypes/components/ITextSize";

interface IStep {
  id: string | number;
  number: number;
  name: string;
  description?: string;
}

interface IAssistedControls {
  goBackText?: string;
  goNextText?: string;
  submitText?: string;
}

interface IFormContainer {
  isMobile?: boolean;
  children: ReactNode;
  title?: string;
  labelsSize: ITextSize;
  showAssisted?: boolean;
  step?: IStep;
  totalSteps?: number;
  onBackClick?: (step: IStep) => void;
  onNextClick?: (step: IStep) => void;
  onSubmitClick?: (step: IStep) => void;
  disableBack?: boolean;
  disableNext?: boolean;
  disableSubmit?: boolean;
  showCurrentStepNumber?: boolean;
  controls?: IAssistedControls;
  assistedSize?: "small" | "large";
}

export type { IFormContainer, IStep, IAssistedControls };
