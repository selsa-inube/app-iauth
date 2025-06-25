interface IModalWarningUI {
    isMobile: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
    closeModal: () => void;
    children: React.ReactNode
}

export type { IModalWarningUI };