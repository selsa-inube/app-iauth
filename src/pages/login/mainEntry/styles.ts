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

const StyledGrid = styled.div<IMainEntryUI>`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    justify-content: start;
    align-items: center;
    justify-items: center;
    gap: 0px;
    padding: ${({ $isMobile }) => ($isMobile ? "20px" : "33px 33px")};
`;


const StyledGridMain = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 100%;
    width: 100%;
    grid-template-rows: auto 443px;
    align-items: center;
`;

export { StyledImg, StyledGrid, StyledGridMain };