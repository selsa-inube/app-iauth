import type { ITextSize } from "@ptypes/components/ITextSize";

interface IInvitedBy {
  urlImg: string;
  text: string;
  textSize?: ITextSize;
  isMobile?: boolean;
  originatorName: string;
}
export type { IInvitedBy };
