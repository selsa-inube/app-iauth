import styled from "styled-components";
import { globalFooterTokens } from "./tokens";

const StyledFooter = styled.footer`
  width: 100%;
  height: 4dvh;
  background-color: ${({ theme }) =>
    theme?.globalFooter?.background?.color ?? globalFooterTokens.background.color};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledFooter };
