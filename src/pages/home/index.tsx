import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useState } from "react";
import { EModalWarning } from "@enum/components/EModalWarning";
const Home = () => {
    const [showModalError, setShowModalError] = useState(false);
    const [typeError, setTypeError] = useState<EModalWarning>(EModalWarning.NONE);
    const screenMobile = useMediaQuery("(max-width: 768px)");

    return (
        <HomeUI
            $isMobile={screenMobile}
            showModalError={showModalError}
            setShowModalError={setShowModalError}
            typeError={typeError}
            setTypeError={setTypeError}
        />
    );
}

export { Home };