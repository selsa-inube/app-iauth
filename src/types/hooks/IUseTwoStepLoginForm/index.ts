import { EModalWarning } from "@enum/components/EModalWarning";

interface IUseTwoStepLoginForm {
  setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>;
  setRedirectPortal: React.Dispatch<React.SetStateAction<boolean>>;
  callbackUrl?: string;
  state?: string;
  codeChallenge?: string;
  applicationName?: string;
}

export type { IUseTwoStepLoginForm };
