import { IStyledMask } from "@ptypes/components/login/IStyledMask";
import styled from "styled-components";
import { mask } from "./tokens";

const StyledMask = styled.div<IStyledMask>`
    flex-direction: ${({ $direction }) => $direction};
    width: 100%;
    height: 100%;
    background-color: ${({ $isModal, theme }) => 
        $isModal 
                ?`${theme?.mask?.background?.dark || mask.background.dark}`
                :`${theme?.mask?.background?.light || mask.background.light}`};
    position: absolute;
    z-index: ${({ $zIndex }) => `${$zIndex}`};
    opacity: 0.5;
`;

export { StyledMask };