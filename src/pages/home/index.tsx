import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";

const Home = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    return (
        <HomeUI $isMobile={screenMobile}/>
    );
}

export { Home };