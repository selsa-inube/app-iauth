import { Stack, Text, Button, Icon } from "@inubekit/inubekit";
import { MdOutlineWarningAmber, MdReportGmailerrorred } from "react-icons/md";
import { IErrorMessage } from "@ptypes/pages/IErrorMessage";

const ErrorMessageUI = (props: IErrorMessage) => {
    const {
        message,
        logoIcon
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
                        icon={ logoIcon 
                            ? <MdOutlineWarningAmber /> 
                            : <MdReportGmailerrorred />}
                    />

                </Stack>

                <Text>
                    {message}
                </Text>
            </Stack>
        </>
    );
}

export { ErrorMessageUI };