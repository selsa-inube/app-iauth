import { Stack, Text, Icon } from "@inubekit/inubekit";
import { Box } from "@components/layout/Box";
import { MdOutlineCampaign } from "react-icons/md";
import { tokens } from "@design/tokens/tokens";
import { IModalUI } from "@ptypes/pages/modal/IModalUI";
import { labelsModalInformation } from "@config/login/modalInformation";

const ModalInformationUI = (props: IModalUI) => {
    const {
        width,
        showModal = true,
        title = labelsModalInformation.title,
        content = labelsModalInformation.defaultContent,
    } = props;

    if (!showModal) {
        return null;
    }

    return (
        <Stack direction="column" gap={tokens.spacing.s200} alignContent="center" justifyContent="center">
            <Text
                type="label"
                size="large"
                appearance="dark"
                weight="bold"
                textAlign="center"
            >
                {title}
            </Text>
            <Stack
                width={width}
                height="75px"
            >
                <Box
                    borderRadius="8px 0px 0px 8px"
                    appearance="neutral"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding={tokens.spacing.s100}
                    width="40px"
                >
                    <Icon
                        appearance="dark"
                        icon={<MdOutlineCampaign />}
                    />
                </Box>
                <Box
                    borderRadius="0px 8px 8px 0px"
                    appearance="light"
                    flexDirection="column"
                    justifyContent="center"
                    width="100%"
                    gap={tokens.spacing.s075}
                    padding={tokens.spacing.s100}
                >
                    <Text
                        type="label"
                        size="medium"
                        appearance="dark"
                    >
                        {content}
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
}

export { ModalInformationUI };