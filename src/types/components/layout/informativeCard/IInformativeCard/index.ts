import { ITextSize } from "@ptypes/components/ITextSize";
import { EStatusIcon } from "@enum/components/EStatusIcon";

interface IInformativeCard {
  title: string;
  message: string;
  buttonText: string;
  buttonAppearance: "primary" | "warning";
  icon: EStatusIcon;
  onButtonClick: () => void;
  labelsSizeDifferent: ITextSize;
}

export type { IInformativeCard };
