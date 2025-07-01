import { IStyledMask } from "@ptypes/components/login/IStyledMask";
import styled from "styled-components";
import { mask } from "./tokens";

const StyledMask = styled.div<IStyledMask>`
    flex-direction: ${({ $direction }) => $direction};
    width: 100%;
    height: 100%;
    background-color: ${({ $backgroundColor, theme }) => 
            `${theme?.mask?.background?.light || mask.background[$backgroundColor]}`};
    
    position: absolute;
    z-index: ${({ $zIndex, theme }) => 
            `${theme?.mask?.zIndex?.behind || mask.zIndex[$zIndex]}`};
    opacity: 0.5;
`;

export { StyledMask };