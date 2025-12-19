import { Text, Stack } from "@inubekit/inubekit";
import type { IInvitedByUI } from "@ptypes/components/register/IInvitedByUIProps";
import { FallbackImage } from "@components/utils/FallbackImage";

const InvitedByUI = (props: IInvitedByUI) => {
  const { urlImg, text, textSize = "medium", isMobile = false, originatorName } = props;

  return (
    <Stack margin="1rem 0 0 0" direction="row" alignItems="center" gap="8px">
      <Text size={textSize} appearance="gray" textAlign="center">
        {text}
      </Text>
      <FallbackImage
        src={urlImg}
        alt={originatorName}
        isMobile={isMobile}
        type={isMobile ? "title" : "headline"}
        textAlign="center"
        imageWidth={"141px"}
        textSize={isMobile ? "large" : "medium"}
        imageHeight={"40px"}
        appearance="dark"
      />
    </Stack>
  );
};

export { InvitedByUI };
