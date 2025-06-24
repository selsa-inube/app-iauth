import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useRef } from "react";

const Home = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const maskModalWarning = useRef(null);

    return (
        <HomeUI
            $isMobile={screenMobile}
            maskModalWarning={maskModalWarning}
        />
    );
}

export { Home };