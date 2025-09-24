import { Stack, Text } from "@inubekit/inubekit";
import { StyledImg } from "./styles";
import { LoginForm } from "@pages/loginForm/";
import { IHomeUI } from "@ptypes/pages/home/IHomeUI";
import { labelsTitles } from "@config/login/entryPage";
import { Background } from "@pages/background";
import { Mask } from "@components/utils/Mask";
import { mask } from "@config/login/mask";
import { ModalWarning } from "@components/layout/ModalWarning";
import { ModalInformation } from "@design/feedback/modalInformation";
import { spacing } from "@design/tokens/tokensWithReference/spacing/spacing";
import { RedirectSpinner } from "@pages/redirectSpinner";

const HomeUI = (props: IHomeUI) => {
  const {
    isMobile,
    urlLogo,
    handleCloseModal,
    isModalWarningOpen,
    setModalWarningType,
    modalWarningType,
    isRedirectPortal,
    setRedirectPortal,
    callbackUrl,
    applicationName,
    modalInformation,
  } = props;
  return (
    <Background>
      <Mask zIndex={mask.maskBackground.zIndex} isModal={false} />
      {isModalWarningOpen && (
        <>
          <Mask zIndex={mask.maskModalWarning.zIndex} isModal />
          <ModalWarning
            onClose={handleCloseModal}
            auxiliaryButton
            modalWarningType={modalWarningType}
            isMobile={isMobile}
          />
        </>
      )}

      {isRedirectPortal && (
        <>
          <Mask zIndex={mask.maskModalWarning.zIndex} isModal />
          <RedirectSpinner />
        </>
      )}

      <Stack
        direction="column"
        height="100vh"
        justifyContent="flex-start"
        alignItems="center"
        gap={isMobile ? spacing.s250 : "0"}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={`${spacing.s200} 0 0 0`}
          width={isMobile ? `240px` : `360px`}
        >
          <Text
            appearance="gray"
            weight="bold"
            type="headline"
            size="small"
            textAlign="center"
          >
            {labelsTitles.titleImg.replace("{0}", applicationName ?? "")}
          </Text>
          <StyledImg
            src={urlLogo}
            $isMobile={isMobile}
            alt={labelsTitles.textAltImg}
          />
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          width="100%"
          height="100%"
          gap={spacing.s200}
        >
          <ModalInformation 
            showModal={modalInformation?.showModal}
            title={modalInformation?.title}
            content={modalInformation?.content}
          />
          <LoginForm
            setModalWarningType={setModalWarningType}
            setRedirectPortal={setRedirectPortal}
            callbackUrl={callbackUrl}
          />
        </Stack>
      </Stack>
    </Background>
  );
};

export { HomeUI };
