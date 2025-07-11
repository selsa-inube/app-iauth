import { Spinner } from "@inubekit/inubekit";
import { StyledBox } from "./styles";
import { Text } from "@inubekit/inubekit";
import { redirectSpinner } from "@config/login/redirectSpinner";

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
                {redirectSpinner.message}
            </Text>
        </StyledBox>

    );
}

export { RedirectSpinnerUI };