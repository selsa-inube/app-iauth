import { RequirementsBoxUI } from "./interface";
import type { IRequirementsBox } from "@ptypes/components/utils/IRequirementsBox";

const RequirementsBox = (props: IRequirementsBox) => {
  return <RequirementsBoxUI {...props} />;
};

export { RequirementsBox };
