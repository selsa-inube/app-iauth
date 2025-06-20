import { Stack, Text, Icon } from "@inubekit/inubekit";
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
            <StyledDivIcon>
                <Icon
                    appearance="dark"
                    icon={
                        <MdOutlineCampaign />
                    }
                />
            </StyledDivIcon>
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