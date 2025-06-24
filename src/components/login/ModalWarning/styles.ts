import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { IStyledModalWarning } from "@ptypes/components/modalWarning/IStyledModalWarning";

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
    box-shadow: 0px 1px 2px 0px ${({ theme }) =>
        theme?.palette?.neutral?.N10 || inube.palette.neutral.N10
    };
    padding: ${({ $isMobile }) =>
        ($isMobile ? "12px 12px 34px 12px" : "24px")
    };
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;

export { StyledCard };