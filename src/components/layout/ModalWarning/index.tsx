import { ModalWarningUI } from "./interface";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";
import { EModalWarning } from "@enum/components/EModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        onClose,
        auxiliaryButton,
        modalWarningType,
        isMobile
    } = props;
    const isFirstWarning = modalWarningType == EModalWarning.FIRSTWARNING;

    return (
        <ModalWarningUI
            onClose={onClose}
            auxiliaryButton={auxiliaryButton}
            isFirstWarning={isFirstWarning}
            isMobile={isMobile}
        />
    );
}

export { ModalWarning };