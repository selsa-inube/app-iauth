import { Stack,Text } from "@inubekit/inubekit";
import { StyledFooter } from "./styled";
import { IGlobalFooter } from "@ptypes/components/layout/globalFooter/IGlobalFooter";
import { layOutTexts } from "@config/layout";

const GlobalFooterUI = (props: IGlobalFooter) => {
  const { children } = props;

  return (
    <StyledFooter>
      {children ? (
        children
      ) : (
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
      )}
    </StyledFooter>
  );
};

export { GlobalFooterUI };
