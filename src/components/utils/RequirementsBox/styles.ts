import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

interface IStyledRequirementsBox {
  $minWidth: string;
}

const StyledRequirementsBox = styled.div<IStyledRequirementsBox>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${tokensWithReference.spacing.s075}
    ${tokensWithReference.spacing.s200};
  min-width: ${({ $minWidth }) => $minWidth};
  width: fit-content;
  min-height: 96px;
  height: auto;
  background: #fafbfc;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledContent = styled.div`
  font-size: 0.75rem;
  color: #666;
  ul {
    margin: 0.5rem 0;
    padding-left: 1rem;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokensWithReference.spacing.s075};
`;

const StyledChecklistIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  margin-top: 2px; /* optical alignment with text baseline */
  svg {
    width: 18px;
    height: 18px;
  }
`;

export {
  StyledRequirementsBox,
  StyledContent,
  StyledChecklistIcon,
  StyledHeader,
};
