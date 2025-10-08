import styled from "styled-components";
import { backgroundUnsplashTokens } from "./tokens";

const StyledMaskUnSplashContainer = styled.div`
  width: 100%;
  background-image: url(${(props) => props.$backgroundImageUrl});
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  overflow: auto;
`;

const StyledUnSplashMask = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.backgroundUnsplash?.mask?.background?.color ??
    backgroundUnsplashTokens.mask.background.color};
  z-index: -1;
  box-sizing: border-box;
  overflow: auto;
`;

export { StyledMaskUnSplashContainer, StyledUnSplashMask };
