export const {
  SERVER_API_BASE_URL,
  SERVER_API_VERSION_V1,
  API_ROUTE_BASE_URL,
} = process.env;
export const SERVER_API_V1_BASE_URL = `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}`;

export const AUTH_ENDPOINTS = {
  EMAIL_VERIFY: '/members/email/verify',
  EMAIL_CONFIRM: '/members/email/confirm',
  SIGNUP_EMAIL: '/members/signup/email',
  RESET_PW: '/members/password/reset',
  SIGNIN_EMAIL: '/members/login/email',
};

export const PRODUCT_PATHS = {
  LIST: '/products',
  LATEST: '/products/latest',
  DETAIL: '/products/:productId',
  RECOMMEND: '/products/recommend',
};

export const PRODUCTS_ENDPOINTS = {
  LIST: `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}${PRODUCT_PATHS.LIST}`,
  LATEST: `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}${PRODUCT_PATHS.LATEST}`,
  DETAIL: `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}${PRODUCT_PATHS.DETAIL}`,
  RECOMMEND: `${SERVER_API_BASE_URL}${SERVER_API_VERSION_V1}${PRODUCT_PATHS.RECOMMEND}`,
};
