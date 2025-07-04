import { ModalWarningUI } from "./interface";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        children,
        onClose,
        auxiliaryButton,
    } = props;

    return (
        <ModalWarningUI
            isMobile={false}
            onClose={onClose}
            children={children}
            auxiliaryButton={auxiliaryButton}
        />
    );
}

export { ModalWarning };