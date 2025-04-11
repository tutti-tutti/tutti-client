import { API_RESOURCES } from '@/constants';

// 메인 쿼리 키
export const QUERY_KEYS_ENDPOINT = {
  ...API_RESOURCES,
};

// 이하 보조 쿼리 키

export const AUTH_QUERY_KEY = {
  EMAIL_VERIFY: 'email-verify',
  EMAIL_CONFIRM: 'email-confirm',
  SIGNUP_EMAIL: 'signup-email',
  RESET_PW: 'password-reset',
  SIGNIN_EMAIL: 'login-email',
  MEMBER_DATA: 'member-data',
};

export const PRODUCTS_QUERY_KEY = {
  LIST: 'list',
  LATEST: 'latest',
  RECOMMEND: 'recommend',
  PAGINATION: 'pagination',
  PRODUCT_REVIEWS: 'productReview',
};

export const CART_QUERY_KEY = {
  CART: 'cart',
};

export const ORDER_QUERY_KEY = {
  CHECKOUT: 'checkout',
};

export const PAYMENTS_QUERY_KEY = {
  CHECKOUT: 'checkout',
  LIST: 'list',
  SUCCESS: 'success',
};

export const CATEGORY_QUERY_KEY = {
  LIST: 'category-list',
  DETAIL: (categoryId: string) => `category-detail-${categoryId}`,
};
