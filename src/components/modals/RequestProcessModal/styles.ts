import styled from "styled-components";
import { tokens } from "@design/tokens/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s200};
  max-width: ${({ $smallScreen }) => ($smallScreen ? "calc(100vw - 2rem)" : "500px")};
  width: 100%;
  max-height: ${({ $smallScreen }) => ($smallScreen ? "80vh" : "auto")};
  margin: ${({ $smallScreen }) => ($smallScreen ? "0 1rem" : "0")};
  overflow-y: auto;
`;

export { StyledModal };
