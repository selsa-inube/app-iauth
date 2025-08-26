import { RegisterRequestWarningUI } from "./interface.tsx";
import { IRegisterRequestWarning } from "@ptypes/components/register/IRegisterRequestWarning";

const RegisterRequestWarning = (props: IRegisterRequestWarning) => {
    const {
        isMobile,
        onClose,
        onConfirm
    } = props;

    return (
        <RegisterRequestWarningUI
            isMobile={isMobile}
            onClose={onClose}
            onConfirm={onConfirm}
        />
    );
}

export { RegisterRequestWarning };
