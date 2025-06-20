import { ModalUI } from "./interface";
import { useMediaQuery } from "@inubekit/inubekit";

const Modal = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const width = screenMobile ? "345px" : "525px";

    return(
        <ModalUI $isMobile={screenMobile} width={width} />
    );
}

export { Modal };