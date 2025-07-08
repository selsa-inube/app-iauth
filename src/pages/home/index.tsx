import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useState } from "react";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";
import { EModalWarning } from "@enum/components/EModalWarning";

const Home = (props: IHome) => {
    const {
        portalCode
    } = props;
    const { urlLogo } = useBusinessData({ portalCode });
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const [isModalWarningOpen, setIsModalWarningOpen] = useState(false);
    const [modalWarningType, setModalWarningType] = useState<EModalWarning>(EModalWarning.NONE);
    const handleCloseModal = () => setIsModalWarningOpen(false);
    const [isRedirectPortal, setIsRedirectPortal] = useState(false);

    useEffect(() => {
        if (modalWarningType !== EModalWarning.NONE) {
            setIsModalWarningOpen(true);
        }
    }, [modalWarningType]);
  
    return (
        <HomeUI
            $isMobile={screenMobile}
            modalWarningType={modalWarningType}
            setModalWarningType={setModalWarningType}
            urlLogo={urlLogo}
            handleCloseModal={handleCloseModal}
            isModalWarningOpen={isModalWarningOpen}
            isRedirectPortal={isRedirectPortal}
            setRedirectPortal={setIsRedirectPortal}
        />
    );
}

export { Home };