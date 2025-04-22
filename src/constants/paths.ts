export const ROUTER_PATH = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/signin',
  RESET_PW: '/reset-password',
  FAQS: '/faqs',
  CART: '/cart',
  MY: '/my',
  MY_PAGE: '/my/orders',
  COUNTRY_SETTING: '/country-setting',
  CHECKOUT: (checkoutRequestItems: string) =>
    `/checkout?checkoutRequestItems=${checkoutRequestItems}`,
  CHECKOUT_SUCCESS: '/checkout/success',
  CHECKOUT_FAIL: '/checkout/fail',
  ORDERS_HISTORY: '/my/orders',
  ORDERS_DETAIL: (orderId: number) => `/my/orders/${orderId}`,
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
  PRODUCT_CATEGORY: (categoryId: string) => `/products?category=${categoryId}`,
  REVIEW_PRODUCT: (orderId: number, productId: number, productItemId: number) =>
    `/my/review/write/${orderId}/${productId}/${productItemId}`,
  ERROR_AUTHORIZED: '/error/authorized',
  ERROR_UNAUTHORIZED: '/error/unauthorized',
  ERROR_RESTRICTED: '/error/restricted',
};

export const PATH_NAME = {
  HOME: '홈',
  SIGNUP: '회원가입',
  LOGIN: '로그인',
  LOGOUT: '로그아웃',
  FAQS: '자주 묻는 질문',
  CART: '장바구니',
  ORDER_CHECKOUT: '주문 결제',
  ORDER_HISTORY: '주문 내역',
  ORDER_DETAIL: '주문 상세',
  MY_PAGE: '마이페이지',
  CURRENT_COUNTRY: '현재 국가',
  COUNTRY_SETTING: '국가설정',
};
