import styled from "styled-components";
import { box } from "./tokens";

const StyledBox = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  gap: ${({ $gap }) => $gap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  border-width: 1px;
  border-style: solid;
  background: ${({ theme, $appearance }) => theme?.box?.background?.color || box.background[$appearance]};
  border-color: ${({ theme, $appearance }) => theme?.box?.border?.color || box.background[$appearance]};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  width: ${($width) => $width};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
`;

export { StyledBox };
