import type { IRegisterStep } from "@ptypes/components/register/IRegisterStepProps";

type ISecurityImageStep = IRegisterStep & {
  onImageSelect?: (file: File | null) => void;
  onPhraseChange?: (value: string) => void;
};

export type { ISecurityImageStep };
