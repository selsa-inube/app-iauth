interface IHomeUI {
    $isMobile: boolean;
    urlLogo?: string;
    maskModalWarning?: React.RefObject<HTMLDivElement>;
    handleCloseModal: () => void,
    isModalWarningOpen: boolean
}

export type { IHomeUI };