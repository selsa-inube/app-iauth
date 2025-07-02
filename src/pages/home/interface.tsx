import { Stack, Text } from "@inubekit/inubekit"
import logosistemasenlinea from "@assets/img/lgo/logo-sistemasnelinea.png";
import { StyledImg } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IHomeUI } from "@ptypes/pages/home/IHomeUI";
import { labelsTitles } from "@config/login/entryPage";
import { Background } from "@pages/background";

const HomeUI = (props: IHomeUI) => {
    const {
        $isMobile,
        setShowModalError,
        setTypeError
    } = props;

    return (
        <>
        <Background />
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
                    type="headline"
                    size="small"
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
                <LoginForm 
                    setShowModalError={setShowModalError}
                    setTypeError={setTypeError}
                />
            </Stack>
        </Stack>
        </>
    );
}

export { HomeUI };
