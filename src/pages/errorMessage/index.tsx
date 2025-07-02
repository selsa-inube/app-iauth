import { ErrorMessageUI } from "./interface";
import { IErrorMessage } from "@ptypes/pages/IErrorMessage";
import { EModalWarning } from "@enum/components/EModalWarning";
const ErrorMessage = (props: IErrorMessage) => {
        const {
        logo,
        message,
        auxiliaryButton,
        closeModal
    } = props;
    const logoIcon = logo == EModalWarning.FIRSTWARNING;

    return (
        <ErrorMessageUI
            logo={logo}
            message={message}
            auxiliaryButton={auxiliaryButton}
            closeModal={closeModal}
            logoIcon={logoIcon}
        />
    );
}

export { ErrorMessage };