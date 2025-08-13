import { GlobalFooterUI } from "./interface";
import { IGlobalFooter } from "@ptypes/components/layout/globalFooter/IGlobalFooter";

const GlobalFooter = (props: IGlobalFooter) => {
  const { children } = props;

  return <GlobalFooterUI>{children}</GlobalFooterUI>;
};

export { GlobalFooter };
