import { EModalWarning } from "@enum/components/EModalWarning";

interface IHomeUI {
    $isMobile: boolean;
    maskModalWarning?: React.RefObject<HTMLDivElement>;
    handleCloseModal: () => void,
    isModalWarningOpen: boolean,
    modalWarningType: EModalWarning,
    setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>
}

export type { IHomeUI };