const IS_PRODUCTION = import.meta.env.PROD;
const AUTH_REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI as string;

const maxRetriesServices = 10;
const maxRetriesPost = 1;
const maxRetriesDelete = 1;

const fetchTimeoutServices = 6000;

const mediaQueryMobile = "(max-width: 770px)";

const enviroment = {
 
};

export {
  enviroment,
  mediaQueryMobile,
  maxRetriesServices,
  maxRetriesPost,
  maxRetriesDelete,
  fetchTimeoutServices,
};
