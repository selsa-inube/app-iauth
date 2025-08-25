import { InformationBoxUI } from "./interface";
import type { IInformationBoxUI } from "@ptypes/components/utils/IInformationBoxUI";

const InformationBox = (props: IInformationBoxUI) => {
  return <InformationBoxUI {...props} />;
};

export { InformationBox };
