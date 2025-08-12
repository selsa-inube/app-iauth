import { GlobalHeader } from "@components/layout/GlobalHeader";
import { GlobalFooter } from "@components/layout/GlobalFooter";
import { IPageLayout } from "@ptypes/components/layout/pageLayout/IPageLayout";
import { BackgroundUnsplash } from "@components/layout/BackgroundUnsplash";

const PageLayoutUI = (props: IPageLayout) => {
  const { children, headerContent, footerContent } = props;

  return (
    <>
      <GlobalHeader>{headerContent}</GlobalHeader>
      <BackgroundUnsplash>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "90dvh",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "20px 0",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {children}
          </div>
        </div>
      </BackgroundUnsplash>
      <GlobalFooter>{footerContent}</GlobalFooter>
    </>
  );
};

export { PageLayoutUI };
