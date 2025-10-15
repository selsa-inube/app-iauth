import { Text } from "@inubekit/inubekit";
import { StyledImgWrapper, StyledImg } from "./styled";
import type { IFallbackImageUI } from "@ptypes/components/utils/FallbackImage/IFallbackImageUI/index";
import { labels } from "@config/components/utils/FallbackImage/labels";

const FallbackImageUI = (props: IFallbackImageUI) => {
  const {
    src,
    alt,
    isMobile,
    textSize = "large",
    appearance = "primary",
    weight = "bold",
    showFallback,
    onImageError,
    fallbackText,
    imageWidth,
    imageHeight,
  } = props;

  return showFallback || !src ? (
    <StyledImgWrapper $isMobile={!!isMobile} $width={imageWidth} $height={imageHeight}>
      <Text size={textSize} appearance={appearance} weight={weight} type="headline" textAlign="center">
        {fallbackText || alt || labels.fallbackAlt}
      </Text>
    </StyledImgWrapper>
  ) : (
    <StyledImg $isMobile={!!isMobile} $width={imageWidth} $height={imageHeight} src={src} alt={alt} onError={onImageError} />
  );
};

export { FallbackImageUI };
