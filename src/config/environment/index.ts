const fetchTimeoutServices = 6000;

const environment = {
    AUTH_API_URL: import.meta.env.VITE_AUTH_API_URL,
    IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env.VITE_ISAAS_QUERY_PROCESS_SERVICE,
    PORTAL_CATALOG_ID: import.meta.env.VITE_PORTAL_CATALOG_ID
}

export { environment, fetchTimeoutServices }