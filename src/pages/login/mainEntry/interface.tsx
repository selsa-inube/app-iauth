import { Stack, Text } from "@inubekit/inubekit"
import logosistemasenlinea from "@assets/img/lgo/logo-sistemasnelinea.png";
import { StyledImg } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IMainEntryUI } from "@ptypes/pages/mainEntry/IMainEntryUI";
import { labelsTitles } from "@config/login/entryPage";

const MainEntryUI = (props: IMainEntryUI) => {
    const {
        $isMobile,
    } = props;

    return (
        <Stack
            justifyContent="center"
            direction="column"
            padding="12px 33px"
            gap="20px"
        >
            <Stack
                direction="column"
                justifyContent="center"
                width={
                    $isMobile ? `190px` : `200px`
                }
            >
                <Text
                    appearance="gray"
                    weight="bold"
                    type="body"
                    size="large"
                    textAlign="center"
                >
                    {labelsTitles.titleImg}
                </Text>
                <StyledImg
                    src={logosistemasenlinea}
                    $isMobile={$isMobile}
                    alt={labelsTitles.textAltImg}
                />
            </Stack>
            <Stack
                direction="column"
                alignItems="center"
                width="100%"
            >
                <LoginForm />
            </Stack>
        </Stack>
    );
}

export { MainEntryUI };
