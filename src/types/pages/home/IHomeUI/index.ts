import { EModalWarning } from "@enum/components/EModalWarning";

interface IHomeUI {
    $isMobile: boolean;
    urlLogo?: string;
    maskModalWarning?: React.RefObject<HTMLDivElement>;
    handleCloseModal: () => void,
    isModalWarningOpen: boolean,
    errorType:EModalWarning,
    setErrorType: (errorType: EModalWarning) => void
}

export type { IHomeUI };