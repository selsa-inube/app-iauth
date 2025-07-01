import { Stack, Text } from "@inubekit/inubekit"
import logosistemasenlinea from "@assets/img/lgo/logo-sistemasnelinea.png";
import { StyledImg } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IHomeUI } from "@ptypes/pages/home/IHomeUI";
import { labelsTitles } from "@config/login/entryPage";
import { Background } from "@pages/background";
import { Mask } from "@components/utils/Mask";
import { mask } from "@config/login/mask";
import { ModalWarning } from "@components/layout/ModalWarning";
import { modalWarningFirst } from "@config/mocks/components/modalWarning/modalWarningFirst";

const HomeUI = (props: IHomeUI) => {
    const {
        $isMobile,
        handleCloseModal,
        isModalWarningOpen
    } = props;


    return (
        <>
            <Mask
                zIndex={mask.maskBackground.zIndex}
                isModal={false}
            />
            {
                isModalWarningOpen && (
                    <>
                        <Mask
                            zIndex={mask.maskModalWarning.zIndex}
                            isModal={true}
                        />
                        <ModalWarning
                            onClose={handleCloseModal}
                            auxiliaryButton={true}
                        >
                            {modalWarningFirst.textInfo}
                        </ModalWarning>
                    </>
                )
            }
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
                    <LoginForm />
                </Stack>
            </Stack>
        </>
    );
}

export { HomeUI };
