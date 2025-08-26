import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { inube } from "@inubekit/inubekit";

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
    background-color: ${inube.palette.neutral.N0};
    border-radius: 8px;
    padding: ${({ $isMobile }) =>
        ($isMobile ? 
            `${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s400} ${tokensWithReference.spacing.s150}` :
            `${tokensWithReference.spacing.s300}`)
    };
    box-shadow: 0px ${tokensWithReference.spacing.s025} ${tokensWithReference.spacing.s025} 0px ${inube.palette.neutral.N10};
    width: ${({ $isMobile, $width }) => $width || ($isMobile ? "330px" : "450px")};
    height: ${({ $isMobile, $height }) => $height || ($isMobile ? "auto" : "auto")};
    min-height: ${({ $isMobile }) => ($isMobile ? "306px" : "326px")};
    z-index: 999;
`;

export { StyledCardModal };
