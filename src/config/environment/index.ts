const authApiUrl = import.meta.env.VITE_AUTH_API_URL as string | undefined;
const numberAttemptsDefault = import.meta.env.VITE_NUMBER_ATTEMPTS as
  | string
  | undefined;
const fetchTimeoutServices = 90000;
const callbackUrl = import.meta.env.VITE_CALLBACKURL as string | undefined;
const iauthQueryProcessService = import.meta.env
  .VITE_IAUTH_QUERY_PROCESS_SERVICE as string | undefined;
const authCodeQueryParam = import.meta.env.VITE_AUTH_CODE_QUERY_PARAM as
  | string
  | undefined;
const selfRegisterTokenQueryParam = import.meta.env
  .VITE_SELF_REGISTER_TOKEN_QUERY_PARAM as string | undefined;

export {
  authApiUrl,
  fetchTimeoutServices,
  numberAttemptsDefault,
  callbackUrl,
  iauthQueryProcessService,
  authCodeQueryParam,
  selfRegisterTokenQueryParam,
};
