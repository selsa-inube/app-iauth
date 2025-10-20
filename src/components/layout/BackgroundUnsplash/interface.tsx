import { StyledMaskUnSplashContainer, StyledUnSplashMask } from "./styles";
import { IBackgroundUnsplash } from "@ptypes/components/layout/backgroundUnsplash/IBackgroundUnsplash";

const BackgroundUnsplashUI = (props: IBackgroundUnsplash) => {
  const { children, backgroundImageUrl } = props;
  return (
    <StyledMaskUnSplashContainer $backgroundImageUrl={backgroundImageUrl}>
      <StyledUnSplashMask>{children}</StyledUnSplashMask>
    </StyledMaskUnSplashContainer>
  );
};

export { BackgroundUnsplashUI };
