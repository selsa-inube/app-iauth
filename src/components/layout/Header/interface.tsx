import { Stack, Text } from "@inubekit/inubekit";
import { titles } from "@config/login/titles";
import { StyledImg } from "./styled";
import { useBusinessDataContext } from "@context/businessData";


const HeaderUI = () => {
    const {originatorData} = useBusinessDataContext();

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
                <StyledImg img={originatorData?.signedUrlBrand} />
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