const fetchTimeoutServices = 6000;

const environment = {
    AUTH_API_URL: import.meta.env.VITE_AUTH_API_URL,
    IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env.VITE_ISAAS_QUERY_PROCESS_SERVICE,
}

export { environment, fetchTimeoutServices }