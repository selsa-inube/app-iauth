import { IMask } from "@ptypes/components/login/IMask";
import styled from "styled-components";

const StyledMask = styled.div<IMask>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor};
    position: absolute;
    z-index: ${props => props.zIndex};
`;

export { StyledMask };