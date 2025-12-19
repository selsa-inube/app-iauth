import { Spinner, Stack } from "@inubekit/inubekit";
import { useEffect, useState } from "react";
import { PageLayout } from "@components/layout/PageLayout";
import { StatusMessage } from "@pages/statusMessage";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { logout } from "@services/core/logout";
import { useAuthParams } from "@hooks/useAuthParams";
import { IAuthParams } from "@ptypes/hooks/useAuthParams/IAuthParams";

const Logout = (props: IAuthParams) => {
  const { hasMissingParams, returnTo } = useAuthParams(props);

  const [isLoggingOut, setIsLoggingOut] = useState(!hasMissingParams);
  const [hasLogoutError, setHasLogoutError] = useState(false);

  useEffect(() => {
    if (hasMissingParams) {
      setIsLoggingOut(false);
      setHasLogoutError(false);
      return;
    }

    let isSubscribed = true;

    const runLogout = async () => {
      if (isSubscribed) {
        setIsLoggingOut(true);
        setHasLogoutError(false);
      }

      try {
        const isSuccess = await logout();

        if (!isSubscribed) {
          return;
        }

        if (isSuccess) {
          const redirectUrl = returnTo || `/${window.location.search}`;
          window.location.href = redirectUrl;
          return;
        }

        setHasLogoutError(true);
      } catch {
        if (isSubscribed) {
          setHasLogoutError(true);
        }
      } finally {
        if (isSubscribed) {
          setIsLoggingOut(false);
        }
      }
    };

    void runLogout();

    return () => {
      isSubscribed = false;
    };
  }, [hasMissingParams]);

  if (hasMissingParams) {
    return (
      <PageLayout>
        <StatusMessage messageType={EStatusMessage.MISSING_PARAMS} />
      </PageLayout>
    );
  }

  if (isLoggingOut) {
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

  if (hasLogoutError) {
    return (
      <PageLayout>
        <StatusMessage messageType={EStatusMessage.GENERAL_ERROR} />
      </PageLayout>
    );
  }

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
};

export { Logout };
