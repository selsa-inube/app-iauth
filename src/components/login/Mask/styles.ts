import { IStyledMask } from "@ptypes/components/login/IStyledMask";
import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

const StyledMask = styled.div<IStyledMask>`
    flex-direction: ${({ $direction }) => $direction};
    width: 100%;
    height: 100%;
    background-color: ${({ $backgroundColor, theme }) => 
        $backgroundColor 
            ? $backgroundColor 
            : `${theme?.palette?.neutral?.N0 ?? inube.palette.neutral.N0}`};
    
    position: absolute;
    z-index: ${({ $zIndex }) => $zIndex};
`;

export { StyledMask };