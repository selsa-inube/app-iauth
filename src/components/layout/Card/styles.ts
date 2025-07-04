import styled from "styled-components"
import { inube, } from "@inubekit/inubekit"

interface StyledCardProps {
  $isMobile: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
    background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
    border-radius: 8px;
    width: ${({ $isMobile }) => ($isMobile ? "320px" : "440px")};
    height: ${({ $isMobile }) => ($isMobile ? "auto" : "360px" )};
    box-shadow: 0px 1px 2px 0px ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
    padding: ${({ $isMobile }) => ($isMobile ? "12px 12px 34px 12px" : "24px 24px 24px 24px")};
    gap: ${({ $isMobile }) => ($isMobile ? "16px" : "16px")};
` ;


export { StyledCard };