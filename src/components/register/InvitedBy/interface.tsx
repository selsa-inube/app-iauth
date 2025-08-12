import { Text, Stack } from "@inubekit/inubekit";
import { StyledInvitedByImg } from "./styled";
import type { IInvitedByUIProps } from "@ptypes/components/register/IInvitedByUIProps";

const InvitedByUI = (props: IInvitedByUIProps) => {
  const { urlImg, text, textSize = "medium", isMobile = false } = props;

  return (
    <Stack margin="1rem 0 0 0" direction="row" alignItems="center" gap="8px">
      <Text size={textSize} appearance="gray" textAlign="center">
        {text}
      </Text>
      <StyledInvitedByImg $isMobile={isMobile} src={urlImg} alt={text} />
    </Stack>
  );
};

export { InvitedByUI };
