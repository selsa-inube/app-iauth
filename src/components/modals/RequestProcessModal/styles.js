import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { requestProcessModalTokens } from "./tokens";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme?.modal?.card?.background?.color ??
    theme?.requestProcessModal?.container?.background?.color ??
    requestProcessModalTokens.container.background.color};
  border-radius: ${tokensWithReference.spacing.s100};
  padding: ${tokensWithReference.spacing.s200};
  max-width: ${({ $smallScreen }) => ($smallScreen ? "calc(100vw - 2rem)" : "500px")};
  width: 100%;
  max-height: ${({ $smallScreen }) => ($smallScreen ? "80vh" : "auto")};
  margin: ${({ $smallScreen }) => ($smallScreen ? "0 1rem" : "0")};
  overflow-y: auto;
`;

export { StyledModal };
