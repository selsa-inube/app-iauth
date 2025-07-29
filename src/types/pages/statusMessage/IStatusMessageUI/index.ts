import { EStatusIcon } from "@enum/components/EStatusIcon";
import { TextSize } from "@ptypes/components/TextSize";

interface IStatusMessageUI {
  title: string;
  message: string;
  buttonText: string;
  buttonAppearance: "primary" | "warning";
  icon: EStatusIcon;
  labelsSizeDifferent: TextSize;
  onButtonClick: () => void;
}

export type { IStatusMessageUI };
