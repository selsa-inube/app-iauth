import type { ITextSize } from "@ptypes/components/ITextSize";
import type { ITextType } from "@ptypes/components/ITextType";
import type { ITextAlign } from "@ptypes/components/ITextAlign";

interface IFallbackImage {
  src?: string;
  alt: string;
  fallbackText?: string;
  isMobile?: boolean;
  textSize?: ITextSize;
  type?: ITextType;
  textAlign?: ITextAlign;
  appearance?: "primary" | "gray" | "success" | "warning" | "danger" | "dark";
  weight?: "normal" | "bold";
  imageWidth?: string | number;
  imageHeight?: string | number;
}

export type { IFallbackImage };
