import { ModalWarningUI } from "./interface";
import { useRef } from "react";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        maskModalWarning,
        children
    } = props;
    const modalRef = useRef<HTMLDivElement>(null);
    function closeModal() {
        if (modalRef.current) {
            modalRef.current.style.display = "none";
        }

        if (maskModalWarning.current) {
            maskModalWarning.current.style.display = "none";
        }
    }

    return (
        <ModalWarningUI
            isMobile={false}
            modalRef={modalRef}
            closeModal={closeModal}
            children={children}
        />
    );
}

export { ModalWarning };