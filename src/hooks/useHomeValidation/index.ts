import { useEffect, useMemo, useState } from "react";
import { validateOriginator } from "@services/core/validateOriginator";
import { IUseHomeValidation } from "@ptypes/hooks/useHomeValidation";
import { IHome } from "@ptypes/pages/home/IHome";

const REQUIRED_PARAMS = [
  "originatorId",
  "applicationName",
  "callbackUrl",
  "state",
  "codeChallenge",
] as const;

const OPTIONAL_PARAMS = ["registerUrl"] as const;

type AllParams = (typeof REQUIRED_PARAMS)[number] | (typeof OPTIONAL_PARAMS)[number];

const getValueFromSources = (
  explicitValue: string | undefined,
  searchParams: URLSearchParams,
  paramName: AllParams,
) => explicitValue ?? searchParams.get(paramName) ?? undefined;

const useHomeValidation = (props: IHome): IUseHomeValidation => {
  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [],
  );

  const originatorId = getValueFromSources(
    props.originatorId,
    searchParams,
    "originatorId",
  );
  const applicationName = getValueFromSources(
    props.applicationName,
    searchParams,
    "applicationName",
  );
  const callbackUrl = getValueFromSources(
    props.callbackUrl,
    searchParams,
    "callbackUrl",
  );
  const stateValue = getValueFromSources(props.state, searchParams, "state");
  const codeChallenge = getValueFromSources(
    props.codeChallenge,
    searchParams,
    "codeChallenge",
  );
  const registerUrl = getValueFromSources(
    props.registerUrl,
    searchParams,
    "registerUrl",
  );

  const hasMissingParams = [
    originatorId,
    applicationName,
    callbackUrl,
    stateValue,
    codeChallenge,
  ].some((value) => !value);

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
    state: stateValue,
    codeChallenge,
    registerUrl,
    hasMissingParams,
    isValidatingOriginator,
    hasOriginatorError,
  };
};

export { useHomeValidation };
export type { IUseHomeValidation };
