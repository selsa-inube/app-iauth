import { GlobalHeader } from "@components/layout/GlobalHeader";
import { GlobalFooter } from "@components/layout/GlobalFooter";
import { IPageLayout } from "@ptypes/components/layout/pageLayout/IPageLayout";
import { BackgroundUnsplash } from "@components/layout/BackgroundUnsplash";
import { StyledContentArea, StyledInnerColumn } from "./styles";

const PageLayoutUI = (props: IPageLayout) => {
  const { children, headerContent, footerContent } = props;

  return (
    <>
      <GlobalHeader>{headerContent}</GlobalHeader>
      <BackgroundUnsplash>
        <StyledContentArea>
          <StyledInnerColumn>{children}</StyledInnerColumn>
        </StyledContentArea>
      </BackgroundUnsplash>
      <GlobalFooter>{footerContent}</GlobalFooter>
    </>
  );
};

export { PageLayoutUI };
