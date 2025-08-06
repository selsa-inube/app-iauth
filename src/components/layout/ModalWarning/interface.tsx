import { Stack, Text, Divider, Button } from "@inubekit/inubekit";
import { StyledCardWarning } from "./styles";
import { MdClose } from "react-icons/md";
import { IModalWarningUI } from "@ptypes/components/modalWarning/IModalWarningUI/indext";
import { modalWarning } from "@config/login/modalWarning";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { ErrorMessage } from "@pages/errorMessage";

const ModalWarningUI = (props: IModalWarningUI) => {
    const {
        isMobile,
        onClose,
        isFirstWarning
    } = props;

    return (
        <StyledCardWarning
            $isMobile={isMobile}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                height="32px"
                alignItems="center"
                margin={`0 0 ${tokensWithReference.spacing.s250} 0`}
            >
                <Text
                    type="headline"
                    size="small"
                    appearance="dark"
                >
                    {modalWarning.title}
                </Text>
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
                        {modalWarning.titleClose}
                    </Button>
                </Stack>
            </Stack>
            <Divider />
            <Stack height="168px">
            <ErrorMessage 
                isFirstWarning={isFirstWarning}
                closeModal={onClose}
            />
            </Stack>
            <Stack
                margin="40px 0"
                direction="row"
                height="65px"
                justifyContent="end"
                gap="20px"
                alignItems="end"
            >
                {!isFirstWarning && (
                    <Button
                        appearance="warning"
                        variant="outlined"
                        spacing="wide"
                        onClick={onClose}
                    >
                        {modalWarning.modalWarningSecond.labelButton}
                    </Button>
                )}

                <Button
                    appearance="warning"
                    spacing="wide"
                    onClick={onClose}
                >
                    {modalWarning.labelUnderstand}
                </Button>
            </Stack>
        </StyledCardWarning>
    );
}

export { ModalWarningUI };