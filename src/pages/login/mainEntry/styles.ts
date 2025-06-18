import styled from "styled-components"
import { IMainEntryUI } from "@ptypes/pages/mainEntry/IMainEntryUI";

const StyledImg = styled.img<IMainEntryUI>`
    width: ${({ $isMobile }) => {
        return $isMobile ? `190px` : `200px`;
    }};
    height: ${({ $isMobile }) => {
        return $isMobile ? `63px` : `60px`;
    }};

`;


export { StyledImg };