import { ReactNode } from "react";

interface IModal {
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

export type { IModal };
