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
    buttonVariant,
    icon,
    onButtonClick,
    labelsSizeDifferent,
  } = props;

  return (
    <Card>
      <Stack direction="column" gap={tokensWithReference.spacing.s250}>
        {/* Header con logo de iAuth */}
        <HeaderUI labelsSizeDifferent={labelsSizeDifferent} />
        <Divider dashed />

        {/* Título principal */}
        <Text
          textAlign="center"
          type="headline"
          size="medium"
          appearance="dark"
        >
          {title}
        </Text>

        {/* Icono del estado */}
        <StatusIcon icon={icon} />

        {/* Mensaje */}
        <Text type="body" size="medium" appearance="gray" textAlign="start">
          {message}
        </Text>

        {/* Botón de acción */}
        <Stack
          direction="row"
          justifyContent="right"
          margin={`${tokensWithReference.spacing.s025} 0 0 0`}
        >
          <Button
            appearance={buttonVariant}
            spacing="wide"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export { InformativeCardUI };
