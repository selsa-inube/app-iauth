import { ErrorMessageUI } from "./interface";
import { IErrorMessage } from "@ptypes/pages/IErrorMessage";

const ErrorMessage = (props: IErrorMessage) => {
        const {
        logo,
        message,
        auxiliaryButton,
        closeModal
    } = props;

    return (
        <ErrorMessageUI
            logo={logo}
            message={message}
            auxiliaryButton={auxiliaryButton}
            closeModal={closeModal}
        />
    );
}

export { ErrorMessage };