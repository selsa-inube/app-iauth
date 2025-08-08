const authApiUrl = import.meta.env.VITE_AUTH_API_URL as string | undefined;
const isaasQueryProcessService = import.meta.env
  .VITE_ISAAS_QUERY_PROCESS_SERVICE as string | undefined;
const numberAttemptsDefault = import.meta.env.VITE_NUMBER_ATTEMPTS as
  | string
  | undefined;
const fetchTimeoutServices = 90000;
const callbackUrl = import.meta.env.VITE_CALLBACKURL as string | undefined;
const iauthQueryProcessService = import.meta.env
  .VITE_IAUTH_QUERY_PROCESS_SERVICE as string | undefined;

export {
  authApiUrl,
  fetchTimeoutServices,
  isaasQueryProcessService,
  numberAttemptsDefault,
  callbackUrl,
  iauthQueryProcessService,
};
