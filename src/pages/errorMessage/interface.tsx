import { Stack, Text, Button, Icon } from "@inubekit/inubekit";
import { EModalWarning } from "@enum/components/EModalWarning";
import { MdOutlineWarningAmber } from "react-icons/md";
import { PiWarningOctagonBold } from "react-icons/pi";
import { modalWarning } from "@config/login/modalWarning";
import { IErrorMessage } from "@ptypes/pages/IErrorMessage";

const ErrorMessageUI = (props: IErrorMessage) => {
    const {
        logo,
        message,
        auxiliaryButton,
        closeModal
    } = props;
    const logoIcon = logo == EModalWarning.FIRSTWARNING ? <MdOutlineWarningAmber /> : <PiWarningOctagonBold />

    return (
        <>
            <Stack
                height="144px"
                width="auto"
                gap="20px"
                direction="column"
                margin="40px 0"
                justifyContent="center"
                alignContent="center"
            >
                <Stack
                    width="100%"
                    justifyContent="center"
                >
                    <Icon
                        appearance="warning"
                        size="80px"
                        icon={ logoIcon }
                    />

                </Stack>

                <Text>
                    {message}
                </Text>
            </Stack>
            <Stack
                margin="40px 0"
                direction="row"
                height="auto"
                justifyContent="end"
                gap="20px"
            >
                {auxiliaryButton && (
                    <Button
                        appearance="warning"
                        variant="outlined"
                        spacing="wide"
                        onClick={closeModal}
                    >
                        {modalWarning.modalWarningSecond.labelButton}
                    </Button>
                )}

                <Button
                    appearance="warning"
                    spacing="wide"
                    onClick={closeModal}
                >
                    {modalWarning.labelUnderstand}
                </Button>
            </Stack>
        </>
    );
}

export { ErrorMessageUI };