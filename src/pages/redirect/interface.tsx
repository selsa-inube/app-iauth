import { Spinner } from "@inubekit/inubekit";
import { StyledBox } from "./styles";
import { Text } from "@inubekit/inubekit";

const RedirectSpinnerUI = () => {
    return (
        <StyledBox>
            <Spinner
                size="large"
                transparent
                appearance="primary"
            />
            <Text
                type="title"
                size="medium"
                appearance="light"
            >
                Redirigiendo al portal de funcionarios...
            </Text>
        </StyledBox>

    );
}

export { RedirectSpinnerUI };