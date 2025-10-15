import type { ITextSize } from "@ptypes/components/ITextSize";

interface IFallbackImage {
  src?: string;
  alt: string;
  fallbackText?: string;
  isMobile?: boolean;
  textSize?: ITextSize;
  appearance?: "primary" | "gray" | "success" | "warning" | "danger";
  weight?: "normal" | "bold";
  imageWidth?: string | number;
  imageHeight?: string | number;
}

export type { IFallbackImage };
