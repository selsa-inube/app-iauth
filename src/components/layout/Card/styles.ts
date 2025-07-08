import styled from "styled-components"
import { card } from "./tokens"

interface StyledCardProps {
  $isMobile: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
    background-color: ${({ theme }) =>
    theme?.card?.backgroundColor?.color?.light || card.backgroundColor.color.light};
    border-radius: 8px;
    width: ${({ $isMobile }) => ($isMobile ? "320px" : "450px")};
    height: ${({ $isMobile }) => ($isMobile ? "auto" : "auto")};
    box-shadow: 0px 1px 2px 0px ${({ theme }) =>
    theme?.card?.boxShadow?.color?.N10 || card.boxShadow.color.dark};
    padding: ${({ $isMobile }) => ($isMobile ? "12px 12px 34px 12px" : "24px 24px 38px 24px")};
    gap: ${({ $isMobile }) => ($isMobile ? "16px" : "16px")};
` ;


export { StyledCard };