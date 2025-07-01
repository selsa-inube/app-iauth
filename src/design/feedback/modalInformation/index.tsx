import { ModalInformationUI } from "./interface";
import { useMediaQuery } from "@inubekit/inubekit";

const ModalInformation = () => {
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const width = screenMobile ? "345px" : "525px";

    return(
        <ModalInformationUI width={width} />
    );
}

export { ModalInformation };