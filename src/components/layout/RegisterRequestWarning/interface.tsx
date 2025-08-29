import { Stack, Button, Text, Icon, Blanket } from "@inubekit/inubekit";
import { MdOutlineWarningAmber } from "react-icons/md";
import { IRegisterRequestWarningUI } from "@ptypes/components/register/IRegisterRequestWarningUI";
import { Modal } from "@components/layout/Modal";
import { registerRequestWarning } from "@config/register/modal/registerWarning";

const RegisterRequestWarningUI = (props: IRegisterRequestWarningUI) => {
    const {
        isMobile,
        onClose,
        onConfirm,
        originatorName,
    } = props;

    const footer = (
        <Stack
            margin="20px 0 0 0"
            direction="row"
            justifyContent="end"
            gap="16px"
            width="100%"
            alignItems="center"
        >
            <Button
                appearance="primary"
                spacing="wide"
                onClick={onConfirm}
            >
                {registerRequestWarning.confirmButton}
            </Button>
        </Stack>
    );

    return (
        <Blanket>
            <Modal
                isMobile={isMobile}
                onClose={onClose}
                title={registerRequestWarning.title}
                showCloseButton={true}
                showDivider={true}
                footer={footer}
                closeButtonText={registerRequestWarning.closeButton}
            >
                <Stack
                    height="200px"
                    width="auto"
                    gap="20px"
                    direction="column"
                    margin="20px 0"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        width="100%"
                        justifyContent="center"
                    >
                        <Icon
                            appearance="warning"
                            size="80px"
                            icon={<MdOutlineWarningAmber />}
                        />
                    </Stack>

                    <Text textAlign="center">
                        {registerRequestWarning.message.replace("{0}", originatorName ?? "")}
                    </Text>
                </Stack>
            </Modal>
        </Blanket>
    );
}

export { RegisterRequestWarningUI };
