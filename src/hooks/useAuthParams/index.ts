import { useMemo } from "react";
import { IAuthParams } from "@ptypes/hooks/useAuthParams/IAuthParams";
import { IUseAuthParams } from "@ptypes/hooks/useAuthParams/IUseAuthParams";

const REQUIRED_PARAMS = [
  "originatorId",
  "applicationName",
  "callbackUrl",
  "state",
  "codeChallenge",
] as const;

const OPTIONAL_PARAMS = ["registerUrl"] as const;

type AllParams =
  | (typeof REQUIRED_PARAMS)[number]
  | (typeof OPTIONAL_PARAMS)[number];

const getValueFromSources = (
  explicitValue: string | undefined,
  searchParams: URLSearchParams,
  paramName: AllParams,
) => explicitValue ?? searchParams.get(paramName) ?? undefined;

const useAuthParams = (props: IAuthParams = {}): IUseAuthParams => {
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
  const state = getValueFromSources(props.state, searchParams, "state");
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
    state,
    codeChallenge,
  ].some((value) => !value);

  return {
    originatorId,
    applicationName,
    callbackUrl,
    state,
    codeChallenge,
    registerUrl,
    hasMissingParams,
    searchParams,
  };
};

export { useAuthParams };
