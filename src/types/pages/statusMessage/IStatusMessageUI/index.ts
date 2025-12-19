import { EStatusIcon } from "@enum/components/EStatusIcon";
import { ITextSize } from "@ptypes/components/ITextSize";

interface IStatusMessageUI {
  title: string;
  message: string;
  buttonText?: string;
  buttonAppearance?: "primary" | "warning";
  icon: EStatusIcon;
  labelsSizeDifferent: ITextSize;
  onButtonClick?: () => void;
}

export type { IStatusMessageUI };
