import { InvitedByUI } from "./interface";
import type { IInvitedBy } from "@ptypes/components/register/IInvitedBy";

const InvitedBy = (props: IInvitedBy) => {
  return <InvitedByUI {...props} />;
};

export { InvitedBy };
