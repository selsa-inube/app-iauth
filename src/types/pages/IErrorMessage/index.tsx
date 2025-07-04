import { EModalWarning } from "@enum/components/EModalWarning";

interface IErrorMessage {
    logo: EModalWarning,
    message: string,
    auxiliaryButton: boolean,
    closeModal: () => void,
    logoIcon: boolean
}

export type { IErrorMessage };