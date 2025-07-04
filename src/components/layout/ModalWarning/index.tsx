import { ModalWarningUI } from "./interface";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";
import { EModalWarning } from "@enum/components/EModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        onClose,
        auxiliaryButton,
        modalWarningType
    } = props;
    const isFirstWarning = modalWarningType == EModalWarning.FIRSTWARNING;

    return (
        <ModalWarningUI
            isMobile={false}
            onClose={onClose}
            auxiliaryButton={auxiliaryButton}
            isFirstWarning={isFirstWarning}
        />
    );
}

export { ModalWarning };