import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { EStatusIcon } from "@enum/components/EStatusIcon";

interface IStatusMessage {
  messageType: EStatusMessage;
  customMessage?: {
    title?: string;
    message?: string;
    buttonText?: string;
    icon?: EStatusIcon;
    buttonAppearance?: "primary" | "warning";
  };
  onButtonClick?: () => void;
}

export type { IStatusMessage };
