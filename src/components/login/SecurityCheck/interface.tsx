import { Box, Stack, Text } from "@inubekit/inubekit";
import { StyledAvatar } from "./styled";
import { ISecurityCheckUI } from "@ptypes/components/login/SecurityCheck/ISecurityCheckUI";
import { securityLabels } from "@config/login/labels/securityCheck";

const SecurityCheckUI = (props: ISecurityCheckUI) => {
  const { imageUrl, phrase, isMobile } = props;
  const subtitleSize = isMobile ? "small" : "large";
  return (
    <>
      <Stack
        height="68px"
        alignItems="center"
        direction="column"
        justifyContent="center"
        gap="8px"
      >
        {isMobile && (
          <Text textAlign="center" type="title" size="large" appearance="dark">
            {securityLabels.header.title}
          </Text>
        )}
        <Text textAlign="center" type="title" size={subtitleSize} appearance="gray">
          {securityLabels.header.subtitle}
        </Text>
      </Stack>
      <Box height="100%" width="100%">
        <Stack
          direction="column"
          gap="12px"
          width="100%"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <StyledAvatar src={imageUrl} alt={securityLabels.imageAlt} />
          <Text textAlign="center" type="title" size="small" appearance="gray">
            “{phrase}”
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export { SecurityCheckUI };
