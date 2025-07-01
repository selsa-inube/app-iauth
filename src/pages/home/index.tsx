import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useRef, useState } from "react";

const Home = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const maskModalWarning = useRef(null);
    const [isModalWarningOpen, setIsModalWarningOpen] = useState(true);

     const handleCloseModal = () => setIsModalWarningOpen(false);

    return (
        <HomeUI
            $isMobile={screenMobile}
            maskModalWarning={maskModalWarning}
            handleCloseModal={handleCloseModal}
            isModalWarningOpen={isModalWarningOpen}
        />
    );
}

export { Home };