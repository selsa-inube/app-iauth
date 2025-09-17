import styled from "styled-components";
import imgBackground from "@assets/img/bkn/background-mainpage.png";
import { backgroundPageTokens } from "./tokens";

const StyledMaskContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackground});
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  overflow: auto;
`;

const StyledMask = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme?.backgroundPage?.mask?.background?.color ??
    backgroundPageTokens.mask.background.color};
  z-index: -1;
  box-sizing: border-box;
  overflow: auto;
`;

export { StyledMaskContainer, StyledMask };
