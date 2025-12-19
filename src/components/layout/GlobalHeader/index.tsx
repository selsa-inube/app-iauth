import { GlobalHeaderUI } from "./interface";
import { IGlobalHeader } from "@ptypes/components/layout/globalHeader/IGlobalHeader";

const GlobalHeader = (props: IGlobalHeader) => {
  const { children } = props;

  return <GlobalHeaderUI>{children}</GlobalHeaderUI>;
};

export { GlobalHeader };
