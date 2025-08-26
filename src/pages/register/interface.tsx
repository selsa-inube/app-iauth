import { Stack } from "@inubekit/inubekit";
import { HeaderUI } from "@components/layout/Header/interface";
import { UserWelcome } from "@components/register/UserWelcome";
import { InvitedBy } from "@components/register/InvitedBy";
import { RegisterOrchestrator } from "@components/register/RegisterOrchestrator";
import { registerStepLabels } from "@config/register/labels/registerStepLabels";
import type { IRegisterPageUI } from "@ptypes/pages/register/IRegisterPageUI";

const RegisterUI = (props: IRegisterPageUI) => {
  const {
    labelsSize,
    userData,
    isMobile,
    labels,
    onRegisterSubmit,
    passwordPolicy,
    isPolicyLoading,
    securityQuestions,
  } = props;

  const containerWidth = isMobile ? "90vw" : "900px";

  return (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        width={containerWidth}
        height="100%"
      >
        <Stack
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          direction="column"
        >
          <HeaderUI labelsSizeDifferent={labelsSize} />
          <UserWelcome userData={userData} labels={labels} />
        </Stack>
        
        <Stack 
          width="100%" 
          justifyContent="start" 
          alignItems="center"
        >
          <InvitedBy
            urlImg={labels.invitedBy.imageUrl}
            text={labels.invitedBy.text}
            textSize={labelsSize}
            isMobile={isMobile}
          />
        </Stack>
        
        <RegisterOrchestrator
          labelsSize={labelsSize ?? "medium"}
          isMobile={isMobile}
          userData={userData}
          labels={registerStepLabels}
          onSubmit={onRegisterSubmit}
          originatorId={userData.originatorId}
          originatorCode={userData.originatorCode}
          passwordPolicy={passwordPolicy}
          isPolicyLoading={isPolicyLoading}
          securityQuestions={securityQuestions}
        />
      </Stack>
    </Stack>
  );
};

export { RegisterUI };
