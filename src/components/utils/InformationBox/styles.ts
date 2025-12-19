import styled from "styled-components";
import { informationBoxTokens } from "./tokens";
import type { IStyledInformationBox } from "@ptypes/components/utils/InformationBox/IStyledInformationBox";

const StyledInformationBox = styled.div<IStyledInformationBox>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width || "fit-content"};
  height: ${({ $height }) => $height || "auto"};
  min-width: ${({ $minWidth }) => $minWidth || "auto"};
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};
  min-height: ${({ $minHeight }) => $minHeight || "auto"};
  max-height: ${({ $maxHeight }) => $maxHeight || "none"};
  background: ${informationBoxTokens.container.background.color};
  border-radius: ${informationBoxTokens.container.radius};
  overflow: hidden;
`;

const StyledContent = styled.div`
  font-size: 0.75rem;
  color: ${informationBoxTokens.content.color};
  display: flex;
  flex-direction: column;
  gap: ${informationBoxTokens.content.gap};
  padding: ${informationBoxTokens.content.paddingY} ${informationBoxTokens.content.paddingX};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${informationBoxTokens.header.gap};
`;

export {
  StyledInformationBox,
  StyledContent,
  StyledHeader,
};
