import { Stack, Text } from "@inubekit/inubekit";
import { titles } from "@config/login/titles";
import { IHeader } from "@ptypes/components/login/IHeader";
import { StyledImg } from "./styled";


const HeaderUI = (props: IHeader) => {
    const {
        labelsSizeDifferent
    } = props;

    return (
        <Stack
            alignItems="center"
            direction="column"
        >
            <Stack
                alignItems="center"
                height="34.02px"
                justifyContent="center"
                gap="7.07px"
            >
                <StyledImg />
                <Text
                    type="title"
                    size={labelsSizeDifferent}
                    appearance="gray"
                    weight="bold"
                >
                    {titles.firstTitleIAuth}
                </Text>
            </Stack>
            <Stack>
                <Text
                    textAlign="center"
                    type="body"
                    size="medium"
                    appearance="dark"
                    weight="normal"
                >
                    {titles.secondTitleIAuth}
                </Text>
            </Stack>
        </Stack>
    );
}

export { HeaderUI };