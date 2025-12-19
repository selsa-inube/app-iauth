import { ModalUI } from "./interface";
import { IModal } from "@ptypes/components/modal/IModal";

const Modal = (props: IModal) => {
    const {
        isMobile,
        onClose,
        title,
        showCloseButton = true,
        closeButtonText = "Cerrar",
        showDivider = true,
        children,
        footer,
        width,
        height
    } = props;

    return (
        <ModalUI
            isMobile={isMobile}
            onClose={onClose}
            title={title}
            showCloseButton={showCloseButton}
            closeButtonText={closeButtonText}
            showDivider={showDivider}
            children={children}
            footer={footer}
            width={width}
            height={height}
        />
    );
}

export { Modal };
