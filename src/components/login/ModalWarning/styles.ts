import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { IStyledModalWarning } from "@ptypes/components/modalWarning/IStyledModalWarning";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

const StyledCard = styled.div<IStyledModalWarning>`
    background-color: ${({ theme }) =>
        theme?.palette?.neutral?.N0 || inube.palette.neutral.N0
    };
    border-radius: 8px;
    width: ${({ $isMobile }) =>
        ($isMobile ? "320px" : "450px")
    };
    height: ${({ $isMobile }) =>
        ($isMobile ? "auto" : "326px")
    };
    box-shadow: 0px ${tokensWithReference.spacing.s025} ${tokensWithReference.spacing.s025} 0px ${({ theme }) =>
        theme?.palette?.neutral?.N10 || inube.palette.neutral.N10
    };
    padding: ${({ $isMobile }) =>
    ($isMobile ? 
        `${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s150} ${tokensWithReference.spacing.s400} ${tokensWithReference.spacing.s150}` :
        `${tokensWithReference.spacing.s300}`)
    };
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;

export { StyledCard };