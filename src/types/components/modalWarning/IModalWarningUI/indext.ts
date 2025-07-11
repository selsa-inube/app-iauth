interface IModalWarningUI {
    isMobile: boolean;
    onClose: () => void;
    auxiliaryButton: boolean;
    isFirstWarning: boolean;
}

export type { IModalWarningUI };