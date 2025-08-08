import { GlobalHeader } from "@components/layout/GlobalHeader";
import { GlobalFooter } from "@components/layout/GlobalFooter";
import { IPageLayout } from "@ptypes/components/layout/pageLayout/IPageLayout";
import { BackgroundUnsplash } from "@components/layout/BackgroundUnsplash";
import { Stack } from "@inubekit/inubekit";

const PageLayoutUI = (props: IPageLayout) => {
  const { children, headerContent, footerContent } = props;

  return (
    <>
      <GlobalHeader>{headerContent}</GlobalHeader>
      <BackgroundUnsplash>
        <Stack
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 94px)"
          width="100%"
        >
          {children}
        </Stack>
      </BackgroundUnsplash>
      <GlobalFooter>{footerContent}</GlobalFooter>
    </>
  );
};

export { PageLayoutUI };
