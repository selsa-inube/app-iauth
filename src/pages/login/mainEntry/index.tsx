import { MainEntryUI } from "@pages/login/mainEntry/interface";
import { useMediaQuery } from "@inubekit/inubekit";

const MainEntry = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    return (
        <MainEntryUI $isMobile={screenMobile}/>
    );
}

export { MainEntry }