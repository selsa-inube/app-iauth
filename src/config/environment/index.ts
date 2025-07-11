const authApiUrl = import.meta.env.VITE_AUTH_API_URL;
const isaasQueryProcessService = import.meta.env.VITE_ISAAS_QUERY_PROCESS_SERVICE;
const portalCatalogId = import.meta.env.VITE_PORTAL_CATALOG_ID;
const numberAttemptsDefault = import.meta.env.VITE_NUMBER_ATTEMPTS;
const fetchTimeoutServices = 90000;
const callbackUrl = import.meta.env.VITE_CALLBACKURL;
const iauthQueryProcessService = import.meta.env.VITE_IAUTH_QUERY_PROCESS_SERVICE;

export { authApiUrl, fetchTimeoutServices, isaasQueryProcessService, portalCatalogId, numberAttemptsDefault, callbackUrl, iauthQueryProcessService };
