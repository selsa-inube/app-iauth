import styled from "styled-components";
import imgBackground from "@assets/img/bkn/background-mainpage.png";

const BackgroundStyled = styled.div`

  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${imgBackground});
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

export { BackgroundStyled };