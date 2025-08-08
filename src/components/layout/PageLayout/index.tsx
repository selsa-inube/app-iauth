import { PageLayoutUI } from "./interface";
import { IPageLayout } from "@ptypes/components/layout/pageLayout/IPageLayout";
const PageLayout = (props: IPageLayout) => {
  const { children, headerContent, footerContent } = props;
  return (
    <PageLayoutUI
      headerContent={headerContent}
      footerContent={footerContent}
    >
      {children}
    </PageLayoutUI>
  );
};

export { PageLayout };
