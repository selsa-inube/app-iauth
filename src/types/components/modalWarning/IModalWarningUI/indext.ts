import { EModalWarning } from "@enum/components/EModalWarning";

interface IModalWarningUI {
    logo: EModalWarning;
    isMobile: boolean;
    message: string;
    auxiliaryButton: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
    closeModal: () => void;
}

export type { IModalWarningUI };