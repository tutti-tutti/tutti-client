export const MIDDLE_PATH = {
  PRODUCTS: '/products',
  CHECKOUT: '/checkout',
  MY: '/my',
  ORDERS: '/my/orders',
  REVIEW: '/my/review',
  ERROR: '/error',
};

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
  SIGNIN: {
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
    url: (categoryId: string) =>
      `${MIDDLE_PATH.PRODUCTS}?category=${categoryId}`,
  },
  PRODUCT_DETAIL: {
    name: '상품 상세',
    url: (productId: number) => `${MIDDLE_PATH.PRODUCTS}/${productId}`,
  },
  CART: {
    name: '장바구니',
    url: '/cart',
  },
  ORDER_CHECKOUT: {
    name: '주문 결제',
    url: (checkoutRequestItems: string) =>
      `${MIDDLE_PATH.CHECKOUT}?checkoutRequestItems=${checkoutRequestItems}`,
  },
  ORDER_CHECKOUT_SUCCESS: {
    name: '주문 성공',
    url: `${MIDDLE_PATH.CHECKOUT}/success`,
  },
  ORDER_CHECKOUT_FAIL: {
    name: '주문 실패',
    url: `${MIDDLE_PATH.CHECKOUT}/fail`,
  },
  ORDER_HISTORY: {
    name: '주문 내역',
    url: `${MIDDLE_PATH.ORDERS}`,
  },
  ORDER_DETAIL: {
    name: '주문 상세',
    url: (orderId: number) => `${MIDDLE_PATH.ORDERS}/${orderId}`,
  },
  MY: {
    name: '마이페이지',
    url: `${MIDDLE_PATH.MY}`,
  },
  MY_PAGE: {
    name: '마이페이지',
    url: `${MIDDLE_PATH.ORDERS}`,
  },
  REVIEW_PRODUCT: {
    name: '리뷰 작성',
    url: (orderId: number, productId: number, productItemId: number) =>
      `${MIDDLE_PATH.REVIEW}/write/${orderId}/${productId}/${productItemId}`,
  },
};

export const PATH_ERROR = {
  ERROR_AUTHORIZED: `/${MIDDLE_PATH.ERROR}/authorized`,
  ERROR_UNAUTHORIZED: `/${MIDDLE_PATH.ERROR}/unauthorized`,
  ERROR_RESTRICTED: `/${MIDDLE_PATH.ERROR}/restricted`,
};

export const LOGOUT = '로그아웃';
export const CURRENT_COUNTRY = '현재 국가';
