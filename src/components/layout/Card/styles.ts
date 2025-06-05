import styled from "styled-components"
import { inube } from "@inubekit/inubekit"

interface StyledCardProps {
  $isMobile: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
    background-color: ${inube.palette.neutral.N10};
    border-radius: 8px;
    width: ${({ $isMobile }) => ($isMobile ? "320px" : "500px")};
    height: ${({ $isMobile }) => ($isMobile ? "354px" : "430.02px" )};
    box-shadow: 0px 1px 2px 0px ${inube.palette.neutral.N60};
    padding: ${({ $isMobile }) => ($isMobile ? "12px" : "24px")};
    gap: ${({ $isMobile }) => ($isMobile ? "16px" : "20px")};
` ;


export { StyledCard };