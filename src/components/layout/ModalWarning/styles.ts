import styled from "styled-components";
import { IStyledModalWarning } from "@ptypes/components/modalWarning/IStyledModalWarning";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { modalWarning } from "./tokens";

const StyledCard = styled.div<IStyledModalWarning>`
    background-color: ${({ theme }) =>
        theme?.background?.color || modalWarning.background.color
    };
    border-radius: 8px;
    width: ${({ $isMobile }) =>
        ($isMobile ? "350px" : "450px")
    };
    height: ${({ $isMobile }) =>
        ($isMobile ? "306px" : "326px")
    };
    box-shadow: 0px ${tokensWithReference.spacing.s025} ${tokensWithReference.spacing.s025} 0px ${({ theme }) =>
        theme?.boxShadow?.color || modalWarning.boxShadow.color
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
    z-index: 2;
`;

export { StyledCard };