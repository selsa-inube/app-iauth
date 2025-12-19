import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

const StyledImageCell = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: ${inube.palette.neutral.N50};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    outline: 2px solid ${inube.palette.neutral.N60};
  }
`;

export { StyledImageCell };

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { StyledImg };
