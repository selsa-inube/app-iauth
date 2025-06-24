import { Stack, Text, Icon, Grid, Divider, Button } from "@inubekit/inubekit";
import { StyledCard } from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineWarningAmber } from "react-icons/md";
import { PiWarningOctagonBold } from "react-icons/pi";
import { IModalWarningUI } from "@ptypes/components/modalWarning/IModalWarningUI/indext";
import { EModalWarning } from "@enum/components/EModalWarning";
import { modalWarning } from "@config/login/modalWarning";


const ModalWarningUI = (props: IModalWarningUI) => {
    const {
        logo,
        isMobile,
        message,
        auxiliaryButton,
        modalRef,
        closeModal
    } = props;

    return (
        <StyledCard
            $isMobile={isMobile}
            ref={modalRef}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                height="32px"
                alignItems="center"
                margin="0 0 20px 0"
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
                    gap="8px"
                >
                    <Text
                        type="label"
                        size="large"
                        appearance="dark"
                    >
                        {modalWarning.titleClose}
                    </Text>
                    <Icon
                        appearance="dark"
                        size="24px"
                        icon={ <IoCloseSharp /> }
                        onClick={closeModal}
                        cursorHover

                    />
                </Stack>
            </Stack>
            <Divider />
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
                        icon={
                            
                            logo == EModalWarning.FIRSTWARNING ?
                                <MdOutlineWarningAmber /> : <PiWarningOctagonBold />
                        }
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
        </StyledCard>
    );
}

export { ModalWarningUI };