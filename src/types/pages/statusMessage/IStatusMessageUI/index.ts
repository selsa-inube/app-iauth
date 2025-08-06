import { EStatusIcon } from "@enum/components/EStatusIcon";
import { ITextSize } from "@src/types/components/ITextSize";

interface IStatusMessageUI {
  title: string;
  message: string;
  buttonText: string;
  buttonVariant: "primary" | "warning";
  icon: EStatusIcon;
  labelsSizeDifferent: ITextSize;
  onButtonClick: () => void;
}

export type { IStatusMessageUI };
