import { Stack, Text } from "@inubekit/inubekit"
import { StyledImg } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IHomeUI } from "@ptypes/pages/home/IHomeUI";
import { labelsTitles } from "@config/login/entryPage";
import { Background } from "@pages/background";
import { Mask } from "@components/utils/Mask";
import { mask } from "@config/login/mask";
import { ModalWarning } from "@components/layout/ModalWarning";
import { ModalInformation } from "@design/feedback/modalInformation";
import { tokens } from "@design/tokens/tokens";
import { spacing } from "@design/tokens/tokensWithReference/spacing/spacing";

const HomeUI = (props: IHomeUI) => {
    const {
        $isMobile,
        urlLogo,
        handleCloseModal,
        isModalWarningOpen,
        setModalWarningType,
        modalWarningType
    } = props;

    return (
        <Background>
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
                            modalWarningType={modalWarningType}

                        />
                        
                    </>
                )
            }
            <Stack
                direction="column"
                padding={`${tokens.spacing.s150} ${tokens.spacing.s400}`}
                height="auto"
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
                        src={urlLogo}
                        $isMobile={$isMobile}
                        alt={labelsTitles.textAltImg}
                    />
                </Stack>
                <Stack
                    direction="column"
                    alignItems="center"
                    width="100%"
                    gap={spacing.s200}
                >
                    <ModalInformation />
                    <LoginForm
                        setModalWarningType={setModalWarningType}
                    />
                </Stack>
            </Stack>
        </Background>
    );
}

export { HomeUI };
