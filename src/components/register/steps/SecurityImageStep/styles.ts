import styled from "styled-components";
import { inube } from "@inubekit/inubekit";


const StyledCircle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${inube.palette.neutral.N50};
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
const StyledSelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export { StyledSelectedImage,StyledCircle };
