import { EModalWarning } from "@enum/components/EModalWarning";

interface IUseTwoStepLoginForm {
    setShowModalError: React.Dispatch<React.SetStateAction<boolean>>;
    setTypeError: React.Dispatch<React.SetStateAction<EModalWarning>>;
}

export type { IUseTwoStepLoginForm };