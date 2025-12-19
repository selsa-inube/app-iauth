import { useCallback, useState } from "react";
import type { IFallbackImage } from "@ptypes/components/utils/FallbackImage/IFallbackImage";
import { FallbackImageUI } from "./interface";

const FallbackImage = (props: IFallbackImage) => {
  const {
    src,
    alt,
    fallbackText,
    isMobile,
    textSize,
    type,
    textAlign,
    appearance,
    weight,
    imageWidth,
    imageHeight,
  } = props;

  const [showFallback, setShowFallback] = useState<boolean>(false);

  const handleImageError = useCallback(() => {
    setShowFallback(true);
  }, []);

  return (
    <FallbackImageUI
      src={src}
      alt={alt}
      fallbackText={fallbackText}
      isMobile={isMobile}
      textSize={textSize}
      type={type}
      textAlign={textAlign}
      appearance={appearance}
      weight={weight}
      showFallback={showFallback}
      onImageError={handleImageError}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    />
  );
};

export { FallbackImage };
