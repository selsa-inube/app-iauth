import { ReactNode } from "react";

interface IModalUI {
    isMobile: boolean;
    onClose: () => void;
    title?: string;
    showCloseButton?: boolean;
    closeButtonText?: string;
    showDivider?: boolean;
    children: ReactNode;
    footer?: ReactNode;
    width?: string;
    height?: string;
}

export type { IModalUI };
