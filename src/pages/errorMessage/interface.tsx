import { Stack, Text, Button, Icon } from "@inubekit/inubekit";
import { MdOutlineWarningAmber, MdReportGmailerrorred } from "react-icons/md";
import { modalWarning } from "@config/login/modalWarning";
import { IErrorMessageUI } from "@ptypes/pages/errorMessage/IErrorMessageUI";
import { modalWarningFirst } from "@config/mocks/components/modalWarning/modalWarningFirst";
import { modalWarningSecond } from "@config/mocks/components/modalWarning/modalWarningSecond";

const ErrorMessageUI = (props: IErrorMessageUI) => {
    const {
        isFirstWarning,
        closeModal
    } = props;

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
                        icon={isFirstWarning
                            ? <MdOutlineWarningAmber />
                            : <MdReportGmailerrorred />}
                    />

                </Stack>

                <Text>
                    {isFirstWarning
                        ? modalWarningFirst.textInfo
                        : modalWarningSecond.textInfo}
                </Text>
            </Stack>
        </>
    );
}

export { ErrorMessageUI };