import { HomeUI } from "@pages/home/interface";
import { Spinner, Stack, useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useState } from "react";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";
import { EModalWarning } from "@enum/components/EModalWarning";
import { StatusMessage } from "@pages/statusMessage";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { PageLayout } from "@components/layout/PageLayout";
import { useHomeValidation } from "@hooks/useHomeValidation";

const Home = (props: IHome) => {
  const {
    originatorId,
    callbackUrl,
    applicationName,
    hasMissingParams,
    isValidatingOriginator,
    hasOriginatorError,
  } = useHomeValidation(props);

  const { urlLogo } = useBusinessData({
    originatorId,
  });
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const [isModalWarningOpen, setIsModalWarningOpen] = useState(false);
  const [modalWarningType, setModalWarningType] = useState<EModalWarning>(
    EModalWarning.NONE,
  );
  const handleCloseModal = () => setIsModalWarningOpen(false);
  const [isRedirectPortal, setIsRedirectPortal] = useState(false);

  useEffect(() => {
    if (modalWarningType !== EModalWarning.NONE) {
      setIsModalWarningOpen(true);
    }
  }, [modalWarningType]);

  if (hasMissingParams) {
    return (
      <PageLayout>
        <StatusMessage
          messageType={EStatusMessage.MISSING_PARAMS}
        />
      </PageLayout>
    );
  }

  if (isValidatingOriginator) {
    return (
      <PageLayout>
        <Stack
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Spinner />
        </Stack>
      </PageLayout>
    );
  }

  if (hasOriginatorError) {
    return (
      <PageLayout>
        <StatusMessage
          messageType={EStatusMessage.GENERAL_ERROR}
        />
      </PageLayout>
    );
  }

  return (
    <HomeUI
      isMobile={screenMobile}
      modalWarningType={modalWarningType}
      setModalWarningType={setModalWarningType}
      urlLogo={urlLogo}
      handleCloseModal={handleCloseModal}
      isModalWarningOpen={isModalWarningOpen}
      isRedirectPortal={isRedirectPortal}
      setRedirectPortal={setIsRedirectPortal}
      callbackUrl={callbackUrl}
      applicationName={applicationName}
    />
  );
};

export { Home };
