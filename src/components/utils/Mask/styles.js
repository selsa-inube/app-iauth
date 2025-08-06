import styled from "styled-components";
import { mask } from "./tokens";

const StyledMask = styled.div`
    flex-direction: ${({ $direction }) => $direction};
    width: 100%;
    height: 100%;
    background-color: ${({ $isModal, theme }) => 
        $isModal 
                ?`${theme?.mask?.dark?.background?.color || mask.dark.background.color}`
                :`${theme?.mask?.light?.background?.color || mask.light.background.color}`};
    position: absolute;
    z-index: ${({ $zIndex }) => `${$zIndex}`};
    opacity: 0.5;
`;

export { StyledMask };