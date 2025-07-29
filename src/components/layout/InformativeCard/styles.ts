import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

interface IStyledContainer {
  $isMobile: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: ${(props) =>
    props.$isMobile
      ? tokensWithReference.spacing.s300
      : tokensWithReference.spacing.s400};
  padding-right: ${(props) =>
    props.$isMobile
      ? tokensWithReference.spacing.s300
      : tokensWithReference.spacing.s400};
`;

const StyledCard = styled.div<IStyledContainer>`
  background-color: #ffffff;
  border-radius: ${tokensWithReference.spacing.s100};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  padding: ${(props) =>
    props.$isMobile
      ? tokensWithReference.spacing.s300
      : tokensWithReference.spacing.s300};
  max-width: ${(props) => (props.$isMobile ? "90%" : "500px")};
  max-height: ${(props) => (props.$isMobile ? "90%" : "458px")};
  width: 100%;
  height: 100%;
  text-align: center;
`;

export { StyledContainer, StyledCard };
