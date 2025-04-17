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
  ERROR_AUTHORIZED: '/error/authorized', // name 없음
  ERROR_UNAUTHORIZED: '/error/unauthorized', // name 없음
  ERROR_RESTRICTED: '/error/restricted', // name 없음
};

export const PATH_NAME = {
  HOME: '홈',
  SIGNUP: '회원가입',
  LOGIN: '로그인',
  LOGOUT: '로그아웃', // url 없음
  FAQS: '자주 묻는 질문',
  CART: '장바구니',
  ORDER_CHECKOUT: '주문 결제',
  ORDER_HISTORY: '주문 내역',
  ORDER_DETAIL: '주문 상세',
  MY_PAGE: '마이페이지',
  CURRENT_COUNTRY: '현재 국가', // url 없음
  COUNTRY_SETTING: '국가설정',
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
  ORDER_HISTORY: {
    name: '/my/orders',
    url: '주문 내역',
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

export const pageRouter = {
  home: PATH.HOME.url,
  countrySetting: PATH.COUNTRY_SETTING.url,
  signup: PATH.SIGNUP.url,
  signin: PATH.LOGIN.url,
  resetPw: PATH.RESET_PW.url,
  faqs: PATH.FAQS.url,
  productCategory: (categoryId: string) =>
    PATH.PRODUCT_CATEGORY.url(categoryId),
  productDetail: (productId: number) => PATH.PRODUCT_DETAIL.url(productId),
  cart: PATH.CART.url,
  orderCheckout: (checkoutRequestItems: string) =>
    PATH.ORDER_CHECKOUT.url(checkoutRequestItems),
  orderHistory: () => PATH.ORDER_HISTORY.url,
  orderDetail: (orderId: number) => PATH.ORDER_DETAIL.url(orderId),
  my: PATH.MY.url,
  myPage: PATH.MY_PAGE.url,
  reviewProduct: (orderId: number, productId: number, productItemId: number) =>
    PATH.REVIEW_PRODUCT.url(orderId, productId, productItemId),
};

export const PATH_ERROR = {
  ERROR_AUTHORIZED: '/error/authorized',
  ERROR_UNAUTHORIZED: '/error/unauthorized',
  ERROR_RESTRICTED: '/error/restricted',
};

export const HEADER_ROUTER = {
  HOME: PATH.HOME.name,
  SIGNUP: PATH.SIGNUP.name,
  LOGIN: PATH.LOGIN.name,
  LOGOUT: '로그아웃',
  FAQS: PATH.FAQS.name,
  CART: PATH.CART.name,
  MY_PAGE: PATH.MY_PAGE.name,
  CURRENT_COUNTRY: '현재 국가',
  COUNTRY_SETTING: PATH.COUNTRY_SETTING.name,
};
