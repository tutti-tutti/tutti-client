export const PATH = {
  HOME: {
    name: '홈',
    url: '/',
  },
  COUNTRY_SETTING: {
    name: '국가설정',
    url: '/country-setting',
  },
  SIGNUP: {
    name: '회원가입',
    url: '/signup',
  },
  LOGIN: {
    name: '로그인',
    url: '/signin',
  },
  RESET_PW: {
    name: '비밀번호 재설정',
    url: '/reset-password',
  },
  FAQS: {
    name: '자주 묻는 질문',
    url: '/faqs',
  },
  PRODUCT_CATEGORY: {
    name: '상품 카테고리',
    url: (categoryId: string) => `/products?category=${categoryId}`,
  },
  PRODUCT_DETAIL: {
    name: '상품 상세',
    url: (productId: number) => `/products/${productId}`,
  },
  CART: {
    name: '장바구니',
    url: '/cart',
  },
  ORDER_CHECKOUT: {
    name: '주문 결제',
    url: (checkoutRequestItems: string) =>
      `/checkout?checkoutRequestItems=${checkoutRequestItems}`,
  },
  ORDER_CHECKOUT_SUCCESS: {
    name: '주문 성공',
    url: '/checkout/success',
  },
  ORDER_CHECKOUT_FAIL: {
    name: '주문 실패',
    url: '/checkout/fail',
  },
  ORDER_HISTORY: {
    name: '주문 내역',
    url: '/my/orders',
  },
  ORDER_DETAIL: {
    name: '주문 상세',
    url: (orderId: number) => `/my/orders/${orderId}`,
  },
  MY: {
    name: '마이페이지',
    url: '/my',
  },
  MY_PAGE: {
    name: '마이페이지',
    url: '/my/orders',
  },
  REVIEW_PRODUCT: {
    name: '리뷰 작성',
    url: (orderId: number, productId: number, productItemId: number) =>
      `/my/review/write/${orderId}/${productId}/${productItemId}`,
  },
};

export const PATH_ERROR = {
  ERROR_AUTHORIZED: '/error/authorized',
  ERROR_UNAUTHORIZED: '/error/unauthorized',
  ERROR_RESTRICTED: '/error/restricted',
};

/**TODO - 기존 레거시 코드 호완, 사용되는 코드 정리 시 제거 */
export const PATH_NAME = {
  HOME: PATH.HOME.name,
  SIGNUP: PATH.SIGNUP.name,
  LOGIN: PATH.LOGIN.name,
  LOGOUT: '로그아웃',
  FAQS: PATH.FAQS.name,
  CART: PATH.CART.name,
  ORDER_CHECKOUT: PATH.ORDER_CHECKOUT.name,
  ORDER_HISTORY: PATH.ORDER_HISTORY.name,
  ORDER_DETAIL: PATH.ORDER_DETAIL.name,
  MY_PAGE: PATH.MY_PAGE.name,
  CURRENT_COUNTRY: '현재 국가',
  COUNTRY_SETTING: PATH.COUNTRY_SETTING.name,
};

/**TODO - 기존 레거시 코드 호완, pageRouter 로 사용 시 제거 */
export const ROUTER_PATH = {
  HOME: PATH.HOME.url,
  SIGNUP: PATH.SIGNUP.url,
  LOGIN: PATH.LOGIN.url,
  RESET_PW: PATH.RESET_PW.url,
  FAQS: PATH.FAQS.url,
  CART: PATH.CART.url,
  MY: PATH.MY.url,
  MY_PAGE: PATH.MY_PAGE.url,
  COUNTRY_SETTING: PATH.COUNTRY_SETTING.url,
  CHECKOUT: (checkoutRequestItems: string) =>
    PATH.ORDER_CHECKOUT.url(checkoutRequestItems),
  CHECKOUT_SUCCESS: PATH.ORDER_CHECKOUT_SUCCESS.url,
  CHECKOUT_FAIL: PATH.ORDER_CHECKOUT_FAIL.url,
  ORDERS_HISTORY: PATH.ORDER_HISTORY.url,
  ORDERS_DETAIL: (orderId: number) => PATH.ORDER_DETAIL.url(orderId),
  PRODUCT_DETAIL: (productId: number) => PATH.PRODUCT_DETAIL.url(productId),
  PRODUCT_CATEGORY: (categoryId: string) =>
    PATH.PRODUCT_CATEGORY.url(categoryId),
  REVIEW_PRODUCT: (orderId: number, productId: number, productItemId: number) =>
    PATH.REVIEW_PRODUCT.url(orderId, productId, productItemId),
  ERROR_AUTHORIZED: PATH_ERROR.ERROR_AUTHORIZED,
  ERROR_UNAUTHORIZED: PATH_ERROR.ERROR_UNAUTHORIZED,
  ERROR_RESTRICTED: PATH_ERROR.ERROR_RESTRICTED,
};
