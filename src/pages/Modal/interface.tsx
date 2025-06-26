import { Stack, Text, Icon, Box } from "@inubekit/inubekit";
import { MdOutlineCampaign } from "react-icons/md";
import { StyledDivIcon, StyledDivBody } from "./styles";
import { IModalUI } from "@ptypes/pages/modal/IModalUI";
import { modalMock } from "@config/mocks/pages/modalMock";

const ModalUI = (props: IModalUI) => {

    const {
        width,
    } = props;

    return (
        <Stack
            width={width}
            height="80px"
        >
            <Box
                borderRadius="0px 8px 8px 0px"
            >
                <Icon
                    appearance="dark"
                    icon={
                        <MdOutlineCampaign />
                    }
                />
            </Box>
            <StyledDivBody>
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
            </StyledDivBody>
        </Stack>
    );
}

export { ModalUI };