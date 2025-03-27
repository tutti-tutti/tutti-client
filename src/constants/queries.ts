import { API_RESOURCES } from '@/constants';

export const QUERY_KEYS_ENDPOINT = {
  ...API_RESOURCES,
};

export const AUTH_QUERY_KEY = {
  EMAIL_VERIFY: 'email-verify',
  EMAIL_CONFIRM: 'email-confirm',
  SIGNUP_EMAIL: 'signup-email',
  RESET_PW: 'password-reset',
  SIGNIN_EMAIL: 'login-email',
};

export const PRODUCTS_QUERY_KEY = {
  LIST: 'list',
  LATEST: 'latest',
  RECOMMEND: 'recommend',
};

export const CART_QUERY_KEY = {
  CART: 'cart',
};

export const ORDER_QUERY_KEY = {
  CHECKOUT: 'checkout',
  LIST: 'list',
};

export const PAYMENTS_QUERY_KEY = {
  CHECKOUT: 'checkout',
  LIST: 'list',
};
