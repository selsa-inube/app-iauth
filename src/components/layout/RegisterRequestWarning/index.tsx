import { RegisterRequestWarningUI } from "./interface.tsx";
import { IRegisterRequestWarning } from "@ptypes/components/register/IRegisterRequestWarning";

const RegisterRequestWarning = (props: IRegisterRequestWarning) => {
    const {
        isMobile,
        onClose,
        onConfirm,
        originatorName,
    } = props;

    return (
        <RegisterRequestWarningUI
            isMobile={isMobile}
            onClose={onClose}
            onConfirm={onConfirm}
            originatorName={originatorName}
        />
    );
}

export { RegisterRequestWarning };
