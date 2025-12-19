import styled from "styled-components";
import { globalHeaderTokens } from "./tokens";

const StyledHeader = styled.header`
  width: 100%;
  height: 5dvh;
  background-color: ${({ theme }) =>
    theme?.globalHeader?.background?.color ?? globalHeaderTokens.background.color};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme?.globalHeader?.border?.bottom?.color ?? globalHeaderTokens.border.bottom.color}`};
`;

export { StyledHeader };
