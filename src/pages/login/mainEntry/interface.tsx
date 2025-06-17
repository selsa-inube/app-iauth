import { Grid, Stack, Text } from "@inubekit/inubekit"
import logosistemasenlinea from "@assets/img/lgo/logo-sistemasnelinea.png";
import { StyledImg, StyledGrid, StyledGridMain } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IMainEntryUI } from "@ptypes/pages/mainEntry/IMainEntryUI";

const MainEntryUI = (props: IMainEntryUI) => {
    const {
        $isMobile,
    } = props;

    return (
        <StyledGridMain>
            <StyledGrid $isMobile={$isMobile}>
                <Stack>
                    <Text appearance="gray" weight="bold" type="body" size="large" >Crediboard</Text>
                </Stack>
                <Stack>
                    <StyledImg src={logosistemasenlinea} $isMobile={$isMobile} alt="Logo negocio" />
                </Stack>
            </StyledGrid>

            <Grid justifyContent="center" alignItems="center" height="auto" >
                <Stack>
                    <LoginForm />
                </Stack>
            </Grid>
        </StyledGridMain>
    );
}

export { MainEntryUI };