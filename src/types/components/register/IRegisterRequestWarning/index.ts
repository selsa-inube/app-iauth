interface IRegisterRequestWarning {
    isMobile: boolean;
    onClose: () => void;
    onConfirm: () => void;
    originatorName?: string;
}

export type { IRegisterRequestWarning };
