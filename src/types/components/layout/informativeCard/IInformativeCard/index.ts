import { ITextSize } from "@src/types/components/ITextSize";
import { EStatusIcon } from "@enum/components/EStatusIcon";

interface IInformativeCard {
  title: string;
  message: string;
  buttonText: string;
  buttonVariant: "primary" | "warning";
  icon: EStatusIcon;
  onButtonClick: () => void;
  labelsSizeDifferent: ITextSize;
}

export type { IInformativeCard };
