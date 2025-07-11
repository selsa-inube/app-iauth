import { EModalWarning } from "@enum/components/EModalWarning";

interface IUseTwoStepLoginForm {
    setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>;
}

export type { IUseTwoStepLoginForm };