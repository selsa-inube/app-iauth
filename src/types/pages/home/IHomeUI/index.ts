import { EModalWarning } from "@enum/components/EModalWarning";

interface IHomeUI {
  isMobile: boolean;
  urlLogo?: string;
  maskModalWarning?: React.RefObject<HTMLDivElement>;
  handleCloseModal: () => void;
  isModalWarningOpen: boolean;
  modalWarningType: EModalWarning;
  setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>;
  isRedirectPortal: boolean;
  setRedirectPortal: React.Dispatch<React.SetStateAction<boolean>>;
  callbackUrl?: string;
  applicationName?: string;
  state?: string;
  codeChallenge?: string;
  modalInformation?: {
    showModal?: boolean;
    title?: string;
    content?: string;
  };
}

export type { IHomeUI };
