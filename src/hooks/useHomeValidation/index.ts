import { useEffect, useState } from "react";
import { validateOriginator } from "@services/core/validateOriginator";
import { authenticateBySession } from "@services/core/authenticateBySession";
import { IUseHomeValidation } from "@ptypes/hooks/useHomeValidation";
import { IAuthParams } from "@ptypes/hooks/useAuthParams/IAuthParams";
import { buildRedirectUrl } from "@utils/buildRedirectUrl";
import { useAuthParams } from "@hooks/useAuthParams";

const useHomeValidation = (props: IAuthParams): IUseHomeValidation => {
  const {
    originatorId,
    applicationName,
    callbackUrl,
    state,
    codeChallenge,
    registerUrl,
    hasMissingParams,
  } = useAuthParams(props);

  const [isValidatingOriginator, setIsValidatingOriginator] = useState(
    !hasMissingParams,
  );
  const [hasOriginatorError, setHasOriginatorError] = useState(false);

  useEffect(() => {
    if (hasMissingParams) {
      setIsValidatingOriginator(false);
      setHasOriginatorError(false);
      return;
    }

    let isSubscribed = true;

    const runValidation = async () => {
      if (!originatorId || !applicationName || !callbackUrl) {
        if (isSubscribed) {
          setHasOriginatorError(true);
          setIsValidatingOriginator(false);
        }
        return;
      }

      if (isSubscribed) {
        setIsValidatingOriginator(true);
        setHasOriginatorError(false);
      }

      try {
        const isValid = await validateOriginator({
          applicationName,
          callbackUrl,
          originatorId,
        });

        if (!isSubscribed) {
          return;
        }

        if (!isValid) {
          setHasOriginatorError(true);
          return;
        }

        if (state && codeChallenge) {
          const sessionResponse = await authenticateBySession({
            state,
            callbackUrl,
            codeChallenge,
          });

          if (!isSubscribed) {
            return;
          }

          if (sessionResponse) {
            const redirectUrl = buildRedirectUrl({
              callbackUrl: sessionResponse.callbackUrl ?? callbackUrl,
              authenticationCode: sessionResponse.authenticationCode,
              state: sessionResponse.state ?? state,
            });
            window.location.href = redirectUrl;
            return;
          }
        }
      } catch {
        if (isSubscribed) {
          setHasOriginatorError(true);
        }
      } finally {
        if (isSubscribed) {
          setIsValidatingOriginator(false);
        }
      }
    };

    void runValidation();

    return () => {
      isSubscribed = false;
    };
  }, [applicationName, callbackUrl, hasMissingParams, originatorId]);

  return {
    originatorId,
    callbackUrl,
    applicationName,
    state,
    codeChallenge,
    registerUrl,
    hasMissingParams,
    isValidatingOriginator,
    hasOriginatorError,
  };
};

export { useHomeValidation };
export type { IUseHomeValidation };
