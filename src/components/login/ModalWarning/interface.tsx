import { Stack, Text, Icon, Divider, Button } from "@inubekit/inubekit";
import { StyledCard } from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { IModalWarningUI } from "@ptypes/components/modalWarning/IModalWarningUI/indext";
import { modalWarning } from "@config/login/modalWarning";
import { tokensWithReference } from "@design/tokens/tokensWithReference";


const ModalWarningUI = (props: IModalWarningUI) => {
    const {
        isMobile,
        modalRef,
        closeModal,
        children
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
                        children={modalWarning.titleClose}
                        onClick={closeModal}
                        iconAfter={<IoCloseSharp />}
                        cursorHover
                        variant="none"
                        appearance="dark"
                    />
                </Stack>
            </Stack>
            <Divider />
            {children}
        </StyledCard>
    );
}

export { ModalWarningUI };