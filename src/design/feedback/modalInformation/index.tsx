import { ModalInformationUI } from "./interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { IModalInformationProps } from "@ptypes/design/feedback/modalInformation";

const ModalInformation = (props: IModalInformationProps) => {
    const { showModal = false, title, content } = props;
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const width = screenMobile ? "345px" : "500px";
    return(
        <ModalInformationUI 
            width={width} 
            showModal={showModal}
            title={title}
            content={content}
        />
    );
}

export { ModalInformation };