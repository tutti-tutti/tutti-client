import { PATH } from '@/constants';

const pagePath = {
  home: PATH.HOME.path,
  countrySetting: PATH.COUNTRY_SETTING.path,
  signup: PATH.SIGNUP.path,
  signin: PATH.SIGNIN.path,
  resetPw: PATH.RESET_PW.path,
  faqs: PATH.FAQS.path,
  myPage: PATH.MY_PAGE.path,
  orderCheckoutFail: PATH.ORDER_CHECKOUT_FAIL.path,
  orderCheckoutSuccess: PATH.ORDER_CHECKOUT_SUCCESS.path,
  productCategory: (categoryId: string) =>
    PATH.PRODUCT_CATEGORY.path(categoryId),
  productDetail: (productId: number) => PATH.PRODUCT_DETAIL.path(productId),
  cart: PATH.CART.path,
  orderCheckout: (checkoutRequestItems: string) =>
    PATH.ORDER_CHECKOUT.path(checkoutRequestItems),
  orderHistory: () => PATH.ORDER_HISTORY.path,
  orderDetail: (orderId: number) => PATH.ORDER_DETAIL.path(orderId),
  reviewProduct: (orderId: number, productId: number, productItemId: number) =>
    PATH.REVIEW_PRODUCT.path(orderId, productId, productItemId),
};

export { pagePath };
