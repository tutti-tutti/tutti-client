export const ROUTER_PATH = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/signin',
  FAQS: '/faqs',
  CART: '/cart',
  MY_PAGE: '/my-page',
  COUNTRY_SETTING: '/country-setting',
  CHECKOUT: (orderProductItems: string) =>
    `/checkout?orderProductItems=${orderProductItems}`,
  CHECKOUT_SUCCESS: '/checkout/success',
  CHECKOUT_FAIL: '/checkout/fail',
  ORDERS_HISTORY: '/orders-history',
  PRODUCT_CATEGORY: (categoryId: string) => `/products?category=${categoryId}`,
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
