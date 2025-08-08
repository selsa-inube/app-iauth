import { Stack } from "@inubekit/inubekit";
import { HeaderUI } from "@components/layout/Header/interface";
import { UserWelcome } from "@components/register/UserWelcome";
import type { IRegisterUI } from "@ptypes/pages/register/IRegisterUI";

const RegisterUI = (props: IRegisterUI) => {
  const { labelsSize, userData, isMobile, labels } = props;

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
        width= {isMobile ? "328px" : "900px"}
        height= "100%"
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
          <HeaderUI labelsSizeDifferent={labelsSize} />
        </Stack>
        <div>

        </div>
      </Stack>
    </Stack>
  );
};

export { RegisterUI };
