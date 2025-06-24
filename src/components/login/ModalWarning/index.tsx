import { ModalWarningUI } from "./interface";
import { useRef } from "react";
import { EModalWarning } from "@enum/components/EModalWarning";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        maskModalWarning
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
            logo={EModalWarning.FIRSTWARNING}
            isMobile={false}
            message="Tu cuenta permanecerá bloqueada durante 24 horas, debido a que hiciste repetidos intentos fallidos."
            auxiliaryButton={true}
            modalRef={modalRef}
            closeModal={closeModal}
        />
    );
}

export { ModalWarning };