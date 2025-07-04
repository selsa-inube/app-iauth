import { EModalWarning } from "@enum/components/EModalWarning";

interface ILoginForm {
    setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>;
}

export type{ ILoginForm };