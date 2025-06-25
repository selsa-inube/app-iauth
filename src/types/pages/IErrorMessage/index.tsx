import { EModalWarning } from "@enum/components/EModalWarning";

interface IErrorMessage {
    logo: EModalWarning,
    message: string,
    auxiliaryButton: boolean,
    closeModal: () => void
}

export type { IErrorMessage };