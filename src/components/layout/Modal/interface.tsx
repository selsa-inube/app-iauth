import { Text, Divider, Button, Grid, Stack } from "@inubekit/inubekit";
import { StyledCardModal } from "./styles";
import { MdClose } from "react-icons/md";
import { IModalUI } from "@ptypes/components/modal/IModalUI";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

const ModalUI = (props: IModalUI) => {
  const {
    isMobile,
    onClose,
    title,
    showCloseButton = true,
    closeButtonText = "Cerrar",
    showDivider = true,
    children,
    footer,
    width,
    height,
  } = props;

  return (
    <StyledCardModal $isMobile={isMobile} $width={width} $height={height}>
      {(title || showCloseButton) && (
        <Grid
          templateColumns={title && showCloseButton ? "1fr auto" : "1fr auto"}
          alignItems="center"
          height="32px"
          gap={tokensWithReference.spacing.s100}
          margin={`0 0 ${tokensWithReference.spacing.s250} 0`}
        >
          {title ? (
            <Text type="title" size="large" appearance="dark">
              {title}
            </Text>
          ) : (
            <div />
          )}
          {showCloseButton && (
            <Button
              onClick={onClose}
              iconAfter={<MdClose />}
              cursorHover
              variant="none"
              appearance="dark"
            >
              {closeButtonText}
            </Button>
          )}
        </Grid>
      )}
      {showDivider && <Divider />}
      <Stack>{children}</Stack>
      {footer && <Stack>{footer}</Stack>}
    </StyledCardModal>
  );
};

export { ModalUI };
