import styled from "styled-components";
import imgBackground from "@assets/img/bkn/background-unsplash.png";

const StyledMaskUnSplashContainer = styled.div`
  width: 100%;
  background-image: url(${imgBackground});
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  overflow: auto;
`;

const StyledUnSplashMask = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.62);
  z-index: -1;
  box-sizing: border-box;
  overflow: auto;
`;

export { StyledMaskUnSplashContainer, StyledUnSplashMask };
