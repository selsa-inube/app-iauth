import { HomeUI } from "@pages/home/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useMemo, useState } from "react";
import { IHome } from "@ptypes/pages/home/IHome";
import { useBusinessData } from "@hooks/useBusinessData";
import { EModalWarning } from "@enum/components/EModalWarning";
import { StatusMessage } from "@pages/statusMessage";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { PageLayout } from "@components/layout/PageLayout";

const REQUIRED_PARAMS = [
  "originatorId",
  "applicationName",
  "callbackUrl",
  "state",
  "codeChallenge",
];

const Home = (props: IHome) => {
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const originatorId = props.originatorId ?? searchParams.get("originatorId") ?? undefined;
  const callbackUrl = props.callbackUrl ?? searchParams.get("callbackUrl") ?? undefined;

  const missingParams = REQUIRED_PARAMS.filter((p) => !searchParams.get(p));
  const hasMissing = missingParams.length > 0;

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

  if (hasMissing) {
    return (
      <PageLayout>
        <StatusMessage
          messageType={EStatusMessage.MISSING_PARAMS}
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
    />
  );
};

export { Home };
