interface IHomeUI {
    $isMobile: boolean;
    maskModalWarning?: React.RefObject<HTMLDivElement>;
    handleCloseModal: () => void,
    isModalWarningOpen: boolean
}

export type { IHomeUI };