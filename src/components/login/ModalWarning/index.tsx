import { ModalWarningUI } from "./interface";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";

const ModalWarning = (props: IModalWarning) => {
    const {
        children,
        onClose
    } = props;

    return (
        <ModalWarningUI
            isMobile={false}
            onClose={onClose}
            children={children}
        />
    );
}

export { ModalWarning };