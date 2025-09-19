import { Stack, Text } from "@inubekit/inubekit";
import { titles } from "@config/login/titles";
import { StyledImg } from "./styled";


const HeaderUI = () => {

    return (
        <Stack
            alignItems="center"
            direction="column"
        >
            <Stack
                alignItems="center"
                height="50px"
                justifyContent="center"
                gap="7.07px"
            >
                <StyledImg />
            </Stack>
            <Stack>
                <Text
                    textAlign="center"
                    type="body"
                    size="medium"
                    appearance="gray"
                    weight="normal"
                >
                    {titles.secondTitleIAuth}
                </Text>
            </Stack>
        </Stack>
    );
}

export { HeaderUI };