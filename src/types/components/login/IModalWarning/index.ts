import { EModalWarning } from "@enum/components/EModalWarning";

interface IModalWarning {
    onClose: () => void,
    auxiliaryButton: boolean,
    modalWarningType: EModalWarning
} 

export type { IModalWarning };