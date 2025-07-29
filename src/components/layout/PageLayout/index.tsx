import { Stack, Text } from "@inubekit/inubekit";
import { PageLayoutUI } from "./interface";
import { IPageLayout } from "@ptypes/components/layout/pageLayout/IPageLayout";
import imgBackground from "@assets/img/lgo/inube-saas.png";
import { layOutTexts } from "@config/layout";
const PageLayout = (props: IPageLayout) => {
  const { children, headerContent, footerContent } = props;
  const header = (
    <Stack
      alignItems="center"
      justifyContent="start"
      width="100%"
      height="100%"
    >
      <div
        style={{
          width: 94,
          height: 25,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imgBackground}
          alt="Logo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Stack>
  );
  const footer = (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Text appearance="gray" size="medium">
        {layOutTexts.globalFooter}
      </Text>
    </Stack>
  );
  return (
    <PageLayoutUI
      headerContent={header || headerContent}
      footerContent={footer || footerContent}
    >
      {children}
    </PageLayoutUI>
  );
};

export { PageLayout };
