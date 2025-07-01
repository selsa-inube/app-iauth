interface IModalWarningUI {
    isMobile: boolean;
    onClose: () => void;
    children: React.ReactNode
}

export type { IModalWarningUI };