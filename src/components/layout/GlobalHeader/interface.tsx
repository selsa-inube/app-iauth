import { StyledHeader } from "./styled";
import { IGlobalHeader } from "@ptypes/components/layout/globalHeader/IGlobalHeader";

const GlobalHeaderUI = (props: IGlobalHeader) => {
  const { children } = props;

  return <StyledHeader>{children}</StyledHeader>;
};

export { GlobalHeaderUI };
