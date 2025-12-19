import { Text } from "@inubekit/inubekit";
import { StyledImg } from "./styled";
import type { IFallbackImageUI } from "@ptypes/components/utils/FallbackImage/IFallbackImageUI/index";
import { labels } from "@config/components/utils/FallbackImage/labels";

const FallbackImageUI = (props: IFallbackImageUI) => {
  const {
    src,
    alt,
    isMobile,
    textSize = "large",
    type,
    textAlign="center",
    appearance = "primary",
    weight = "bold",
    showFallback,
    onImageError,
    fallbackText,
    imageWidth,
    imageHeight,
  } = props;
  return showFallback || !src ? (
      <Text size={textSize} appearance={appearance} weight={weight} type={type} textAlign={textAlign}>
        {fallbackText || alt || labels.fallbackAlt}
      </Text>
  ) : (
    <StyledImg $isMobile={!!isMobile} $width={imageWidth} $height={imageHeight} src={src} alt={alt} onError={onImageError} />
  );
};

export { FallbackImageUI };
