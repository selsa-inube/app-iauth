import { ErrorMessageUI } from "./interface";
import { IErrorMessage } from "@ptypes/pages/errorMessage/IErrorMessage";
const ErrorMessage = (props: IErrorMessage) => {
    const {
        isFirstWarning,
        closeModal
    } = props;

    return (
        <ErrorMessageUI
            isFirstWarning={isFirstWarning}
            closeModal={closeModal}
        />
    );
}

export { ErrorMessage };