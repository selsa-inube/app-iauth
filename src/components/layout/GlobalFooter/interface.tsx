import { StyledFooter } from "./styled";
import { IGlobalFooter } from "@ptypes/components/layout/globalFooter/IGlobalFooter";

const GlobalFooterUI = (props: IGlobalFooter) => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
};

export { GlobalFooterUI };
