interface IModalWarningUI {
    isMobile: boolean;
    onClose: () => void;
    children: React.ReactNode;
    auxiliaryButton: boolean;
}

export type { IModalWarningUI };