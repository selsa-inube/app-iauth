interface IRegisterRequestWarningUI {
    isMobile: boolean;
    onClose: () => void;
    onConfirm: () => void;
    originatorName?: string;
}

export type { IRegisterRequestWarningUI };
