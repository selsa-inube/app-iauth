import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";
import { useState } from "react";

const Home = (props: IHome) => {
    const {
        portalCode
    } = props;
    const { urlLogo } = useBusinessData({ portalCode });
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const [isModalWarningOpen, setIsModalWarningOpen] = useState(true);
    const handleCloseModal = () => setIsModalWarningOpen(false);

    return (
        <HomeUI
            $isMobile={screenMobile}
            urlLogo={urlLogo}
            handleCloseModal={handleCloseModal}
            isModalWarningOpen={isModalWarningOpen}
        />
    );
}

export { Home };