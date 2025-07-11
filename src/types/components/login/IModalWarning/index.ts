import { EModalWarning } from "@enum/components/EModalWarning";

interface IModalWarning {
    onClose: () => void,
    auxiliaryButton: boolean,
    modalWarningType: EModalWarning,
    isMobile: boolean
} 

export type { IModalWarning };