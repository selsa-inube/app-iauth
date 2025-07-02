import { EModalWarning } from "@enum/components/EModalWarning";

interface ILoginForm {
    setShowModalError: React.Dispatch<React.SetStateAction<boolean>>;
    setTypeError: React.Dispatch<React.SetStateAction<EModalWarning>>;
}

export type{ ILoginForm };