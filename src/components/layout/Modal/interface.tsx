import { Stack, Text, Divider, Button } from "@inubekit/inubekit";
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
        height
    } = props;

    return (
        <StyledCardModal
            $isMobile={isMobile}
            $width={width}
            $height={height}
        >
            {(title || showCloseButton) && (
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    height="32px"
                    alignItems="center"
                    margin={`0 0 ${tokensWithReference.spacing.s250} 0`}
                >
                    {title && (
                        <Text
                            type="headline"
                            size="small"
                            appearance="dark"
                        >
                            {title}
                        </Text>
                    )}
                    {showCloseButton && (
                        <Stack
                            direction="row"
                            height="100%"
                            alignItems="center"
                            gap={`${tokensWithReference.spacing.s100}`}
                        >
                            <Button
                                onClick={onClose}
                                iconAfter={<MdClose />}
                                cursorHover
                                variant="none"
                                appearance="dark"
                            >
                                {closeButtonText}
                            </Button>
                        </Stack>
                    )}
                </Stack>
            )}
            {showDivider && <Divider />}
            <Stack>
                {children}
            </Stack>
            {footer && (
                <Stack>
                    {footer}
                </Stack>
            )}
        </StyledCardModal>
    );
}

export { ModalUI };
