import { PATH } from '@/constants';

const pagePath = {
  home: PATH.HOME.url,
  countrySetting: PATH.COUNTRY_SETTING.url,
  signup: PATH.SIGNUP.url,
  signin: PATH.SIGNIN.url,
  resetPw: PATH.RESET_PW.url,
  faqs: PATH.FAQS.url,
  myPage: PATH.MY_PAGE.url,
  orderCheckoutFail: PATH.ORDER_CHECKOUT_FAIL.url,
  orderCheckoutSuccess: PATH.ORDER_CHECKOUT_SUCCESS.url,
  productCategory: (categoryId: string) =>
    PATH.PRODUCT_CATEGORY.url(categoryId),
  productDetail: (productId: number) => PATH.PRODUCT_DETAIL.url(productId),
  cart: PATH.CART.url,
  orderCheckout: (checkoutRequestItems: string) =>
    PATH.ORDER_CHECKOUT.url(checkoutRequestItems),
  orderHistory: () => PATH.ORDER_HISTORY.url,
  orderDetail: (orderId: number) => PATH.ORDER_DETAIL.url(orderId),
  reviewProduct: (orderId: number, productId: number, productItemId: number) =>
    PATH.REVIEW_PRODUCT.url(orderId, productId, productItemId),
};

export { pagePath };
