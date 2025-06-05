import type { ICard } from "@types/components/card/ICard";
import { StyledCard } from './styles'
import { useMediaQuery } from '@inubekit/inubekit';


const Card = (porps: ICard) => {
    const { children } = porps;

    const screenMobile = useMediaQuery("(max-width: 768px)");

    return (
        <StyledCard $isMobile={screenMobile}>
            {children}
        </StyledCard>
    );
}


export { Card };