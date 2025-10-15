import type { ITextSize } from "@ptypes/components/ITextSize";

interface IFallbackImageUI {
  src?: string;
  alt: string;
  fallbackText?: string;
  isMobile?: boolean;
  textSize?: ITextSize;
  appearance?: "primary" | "gray" | "success" | "warning" | "danger";
  weight?: "normal" | "bold";
  showFallback?: boolean;
  onImageError?: () => void;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

export type { IFallbackImageUI };
