import styled from "styled-components"
import { IHomeUI } from "@ptypes/pages/home/IHomeUI";

const StyledImg = styled.img<IHomeUI>`
    width: ${({ $isMobile }) => {
        return $isMobile ? `190px` : `200px`;
    }};
    height: ${({ $isMobile }) => {
        return $isMobile ? `63px` : `60px`;
    }};

`;


export { StyledImg };