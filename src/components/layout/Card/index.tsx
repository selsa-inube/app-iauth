import type { ICard } from "@ptypes/components/card/ICard";
import { StyledCard } from './styles'
import { useMediaQuery } from '@inubekit/inubekit';


const Card = (props: ICard) => {
    const { children } = props;    
    const screenMobile = useMediaQuery("(max-width: 768px)");

    return (
        <StyledCard $isMobile={screenMobile}>
            {children}
        </StyledCard>
    );
}


export { Card };