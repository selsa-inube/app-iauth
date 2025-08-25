import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

interface IStyledInformationBoxProps {
  $width?: string;
  $height?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $minHeight?: string;
  $maxHeight?: string;
}

const StyledInformationBox = styled.div<IStyledInformationBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width || "fit-content"};
  height: ${({ $height }) => $height || "auto"};
  min-width: ${({ $minWidth }) => $minWidth || "auto"};
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};
  min-height: ${({ $minHeight }) => $minHeight || "auto"};
  max-height: ${({ $maxHeight }) => $maxHeight || "none"};
  background: #fafbfc;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledContent = styled.div`
  font-size: 0.75rem;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: ${tokensWithReference.spacing.s075};
  padding: ${tokensWithReference.spacing.s075}
    ${tokensWithReference.spacing.s200};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokensWithReference.spacing.s075};
`;

export {
  StyledInformationBox,
  StyledContent,
  StyledHeader,
};
