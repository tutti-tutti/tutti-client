import { PATH } from '@/constants';

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
  myPage: PATH.MY_PAGE.url,
  reviewProduct: (orderId: number, productId: number, productItemId: number) =>
    PATH.REVIEW_PRODUCT.url(orderId, productId, productItemId),
};
