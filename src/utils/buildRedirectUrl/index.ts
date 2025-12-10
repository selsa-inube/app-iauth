import { authCodeQueryParam, stateQueryParam } from "@config/environment";
import { IBuildRedirectUrlParams } from "@ptypes/utils/IBuildRedirectUrlParams";

const buildRedirectUrl = (params: IBuildRedirectUrlParams): string => {
  const { callbackUrl, authenticationCode, state } = params;

  const url = new URL(callbackUrl);

  if (authenticationCode) {
    const queryParamName = authCodeQueryParam ?? "ac";
    url.searchParams.set(queryParamName, authenticationCode);
    const stateParamName = stateQueryParam ?? "state";
    url.searchParams.set(stateParamName, state ?? "");
  }

  return url.toString();
};

export { buildRedirectUrl };
