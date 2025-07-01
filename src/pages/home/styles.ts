import styled from "styled-components";

interface IStyledImg {
    $isMobile: boolean;
}

const StyledImg = styled.img<IStyledImg>`
    width: ${({ $isMobile }) => {
        return $isMobile ? `190px` : `200px`;
    }};
    height: ${({ $isMobile }) => {
        return $isMobile ? `63px` : `60px`;
    }};

`;


export { StyledImg };