import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";

const Home = (props: IHome) => {
    const { 
        portalCode 
    } = props;
    const { urlLogo } = useBusinessData({ portalCode });
    const screenMobile = useMediaQuery("(max-width: 768px)");
    
    return (
        <HomeUI $isMobile={screenMobile}  urlLogo={urlLogo} />
    );
}

export { Home };