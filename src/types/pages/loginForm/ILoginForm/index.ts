import { EModalWarning } from "@enum/components/EModalWarning";

interface ILoginForm {
  setModalWarningType: React.Dispatch<React.SetStateAction<EModalWarning>>;
  setRedirectPortal: React.Dispatch<React.SetStateAction<boolean>>;
  callbackUrl?: string;
}

export type { ILoginForm };
