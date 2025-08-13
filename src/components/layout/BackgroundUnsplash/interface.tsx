import { StyledMaskUnSplashContainer, StyledUnSplashMask } from "./styles";
import { IBackgroundUnsplash } from "@ptypes/components/layout/backgroundUnsplash/IBackgroundUnsplash";

const BackgroundUnsplashUI = (props: IBackgroundUnsplash) => {
  const { children } = props;

  return (
    <StyledMaskUnSplashContainer>
      <StyledUnSplashMask>{children}</StyledUnSplashMask>
    </StyledMaskUnSplashContainer>
  );
};

export { BackgroundUnsplashUI };
