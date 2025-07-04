import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useState } from "react";
import { EModalWarning } from "@enum/components/EModalWarning";

const Home = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const [isModalWarningOpen, setIsModalWarningOpen] = useState(false);
    const [modalWarningType, setModalWarningType] = useState<EModalWarning>(EModalWarning.NONE);
    const handleCloseModal = () => setIsModalWarningOpen(false);

    useEffect(() => {
        if (modalWarningType !== EModalWarning.NONE) {
            setIsModalWarningOpen(true);
        }
    }, [modalWarningType]);
  
    return (
        <HomeUI
            $isMobile={screenMobile}
            handleCloseModal={handleCloseModal}
            isModalWarningOpen={isModalWarningOpen}
            modalWarningType={modalWarningType}
            setModalWarningType={setModalWarningType}
        />
    );
}

export { Home };