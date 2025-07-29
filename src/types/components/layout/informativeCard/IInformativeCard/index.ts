import { TextSize } from "@ptypes/components/TextSize";
import { EStatusIcon } from "@enum/components/EStatusIcon";

interface IInformativeCard {
  title: string;
  message: string;
  buttonText: string;
  buttonVariant: "primary" | "warning";
  icon: EStatusIcon;
  onButtonClick: () => void;
  labelsSizeDifferent: TextSize;
}

export type { IInformativeCard };
