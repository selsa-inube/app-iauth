interface IModalWarning {
    children: React.ReactNode,
    onClose: () => void,
    auxiliaryButton: boolean
} 

export type { IModalWarning };