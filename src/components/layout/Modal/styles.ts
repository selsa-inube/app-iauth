import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { modalTokens } from "./tokens";

interface IStyledCardModal {
    $isMobile: boolean;
    $width?: string;
    $height?: string;
}

const StyledCardModal = styled.div<IStyledCardModal>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) =>
        (theme as any)?.modal?.card?.background?.color ?? modalTokens.card.background.color};
    border-radius: ${modalTokens.card.radius};
    padding: ${({ $isMobile }) =>
        ($isMobile ? 
            `${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s400} ${tokensWithReference.spacing.s150}` :
            `${tokensWithReference.spacing.s300}`)
    };
    box-shadow: ${({ theme }) => {
        const s = (theme as any)?.modal?.card?.shadow;
        const shadow = {
            offsetX: s?.offsetX ?? modalTokens.card.shadow.offsetX,
            offsetY: s?.offsetY ?? modalTokens.card.shadow.offsetY,
            blur: s?.blur ?? modalTokens.card.shadow.blur,
            spread: s?.spread ?? modalTokens.card.shadow.spread,
            color: s?.color ?? modalTokens.card.shadow.color,
        };
        return `${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${shadow.spread} ${shadow.color}`;
    }};
    width: ${({ $isMobile, $width }) => $width || ($isMobile ? "330px" : "450px")};
    height: ${({ $isMobile, $height }) => $height || ($isMobile ? "auto" : "auto")};
    min-height: ${({ $isMobile }) => ($isMobile ? "306px" : "326px")};
    z-index: 2;
`;

export { StyledCardModal };
