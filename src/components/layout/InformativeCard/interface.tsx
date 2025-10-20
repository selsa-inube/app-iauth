import { Stack, Text, Button, Divider } from "@inubekit/inubekit";
import { IInformativeCard } from "@ptypes/components/layout/informativeCard/IInformativeCard";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { HeaderUI } from "@components/layout/Header/interface";
import { StatusIcon } from "@components/utils/StatusIcon";
import { Card } from "@components/layout/Card";
const InformativeCardUI = (props: IInformativeCard) => {
  const {
    title,
    message,
    buttonText,
    buttonAppearance = "primary",
    icon,
    onButtonClick,
  } = props;

  return (
    <Card>
      <Stack direction="column" gap={tokensWithReference.spacing.s250}>
        <HeaderUI />
        <Divider dashed />

        <Text
          textAlign="center"
          type="headline"
          size="medium"
          appearance="dark"
        >
          {title}
        </Text>

        <StatusIcon icon={icon} />

        <Text type="body" size="medium" appearance="gray" textAlign="start">
          {message}
        </Text>

        {buttonText && (
          <Stack
            direction="row"
            justifyContent="right"
            margin={`${tokensWithReference.spacing.s025} 0 0 0`}
          >
            <Button
              appearance={buttonAppearance}
              spacing="wide"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export { InformativeCardUI };
