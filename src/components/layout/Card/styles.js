import styled from "styled-components"
import { card } from "./tokens"

const StyledCard = styled.div`
    background-color: ${({ theme }) =>
    theme?.card?.light?.backgroundColor?.color || card.light.backgroundColor.color};
    border-radius: 8px;
    width: ${({ $isMobile }) => ($isMobile ? "320px" : "450px")};
    height: auto;
    box-shadow: 0px 1px 2px 0px ${({ theme }) =>
    theme?.card?.dark?.boxShadow?.color || card.dark.boxShadow.color};
    padding: ${({ $isMobile }) => ($isMobile ? "12px 12px 34px 12px" : "24px 24px 38px 24px")};
    gap: ${({ $isMobile }) => ($isMobile ? "16px" : "16px")};
` ;


export { StyledCard };