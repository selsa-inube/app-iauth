import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { informativeCardTokens } from "./tokens";

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
  background-color: ${({ theme }) =>
    (theme as any)?.informativeCard?.container?.background?.color ?? informativeCardTokens.container.background.color};
  border-radius: ${tokensWithReference.spacing.s100};
  box-shadow: ${({ theme }) => {
    const t = (theme as any)?.informativeCard?.container?.shadow;
    const shadow = {
      color: t?.color ?? informativeCardTokens.container.shadow.color,
      x: t?.offsetX ?? informativeCardTokens.container.shadow.offsetX,
      y: t?.offsetY ?? informativeCardTokens.container.shadow.offsetY,
      blur: t?.blur ?? informativeCardTokens.container.shadow.blur,
      spread: t?.spread ?? informativeCardTokens.container.shadow.spread,
    };
    return `${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color}`;
  }};
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
