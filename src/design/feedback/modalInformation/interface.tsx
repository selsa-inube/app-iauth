import { Stack, Text, Icon } from "@inubekit/inubekit";
import { Box } from "@components/layout/Box";
import { MdOutlineCampaign } from "react-icons/md";
import { tokens } from "@design/tokens/tokens";
import { IModalUI } from "@ptypes/pages/modal/IModalUI";
import { modalMock } from "@config/mocks/pages/modalMock";

const ModalInformationUI = (props: IModalUI) => {

    const {
        width,
    } = props;

    return (
        <Stack
            width={width}
            height="80px"
        >
            <Box
                borderRadius="8px 0px 0px 8px"
                appearance="light"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={tokens.spacing.s100}
                width="40px"
            >
                <Icon
                    appearance="dark"
                    icon={
                        <MdOutlineCampaign />
                    }
                />
            </Box>
            <Box
                borderRadius="0px 8px 8px 0px"
                appearance="dark"
                flexDirection="column"
                justifyContent="center"
                gap={tokens.spacing.s075}
                padding={tokens.spacing.s100}
            >
                <Text
                    type="label"
                    size="medium"
                    appearance="light"
                    weight="bold"
                    textAlign="start"
                >
                    {modalMock.title}
                </Text>
                <Text
                    type="label"
                    size="medium"
                    appearance="light"
                >
                    {modalMock.content}
                </Text>
            </Box>
        </Stack>
    );
}

export { ModalInformationUI };