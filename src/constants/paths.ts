export const ROUTER_PATH = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/signin',
  RESET_PW: '/reset-password',
  FAQS: '/faqs',
  CART: '/cart',
  MY_PAGE: '/my/orders',
  COUNTRY_SETTING: '/country-setting',
  CHECKOUT: (orderProductItems: string) =>
    `/checkout?orderProductItems=${orderProductItems}`,
  CHECKOUT_SUCCESS: '/checkout/success',
  CHECKOUT_FAIL: '/checkout/fail',
  ORDERS_HISTORY: '/my/orders',
  ORDERS_DETAIL: (orderId: number) => `/my/orders/${orderId}`,
  PRODUCT_CATEGORY: (categoryId: string) => `/products?category=${categoryId}`,
  REVIEW_PRODUCT: (orderId: number, productItemId: number) =>
    `/my/review/write/${orderId}/${productItemId}`,
  ERROR_AUTHORIZED: '/error/authorized',
  ERROR_UNAUTHORIZED: '/error/unauthorized',
  ERROR_RESTRICTED: '/error/restricted',
};

export const PATH_NAME = {
  SIGNUP: '회원가입',
  LOGIN: '로그인',
  LOGOUT: '로그아웃',
  FAQS: '자주 묻는 질문',
  CART: '장바구니',
  MY_PAGE: '마이지혜',
  CURRENT_COUNTRY: '현재 국가',
  COUNTRY_SETTING: '국가설정',
};
