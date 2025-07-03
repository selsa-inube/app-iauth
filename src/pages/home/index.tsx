import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";
import { useState } from "react";
import { EModalWarning } from "@enum/components/EModalWarning";

const Home = (props: IHome) => {
    const {
        portalCode
    } = props;
    const { urlLogo } = useBusinessData({ portalCode });
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const [isModalWarningOpen, setIsModalWarningOpen] = useState(false);
    const [errorType, setErrorType] = useState<EModalWarning>(EModalWarning.NONE);
    const handleCloseModal = () => setIsModalWarningOpen(false);
    errorType != EModalWarning.NONE && setIsModalWarningOpen(true);

    return (
        <HomeUI
            $isMobile={screenMobile}
            urlLogo={urlLogo}
            handleCloseModal={handleCloseModal}
            isModalWarningOpen={isModalWarningOpen}
            errorType={errorType}
            setErrorType={setErrorType}
        />
    );
}

export { Home };