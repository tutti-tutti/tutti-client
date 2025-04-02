import type {
  CategoryFaqsRequestAPISchema,
  SearchFaqsRequestAPISchema,
} from '@/types';

export const { SERVER_API_BASE_URL } = process.env;

export const API_RESOURCES = {
  MEMBERS: '/members',
  PRODUCTS: '/products',
  CART: '/cart',
  ORDERS: '/orders',
  PAYMENTS: '/payments',
  REFUND: '/refund',
  REVIEWS: '/reviews',
  FAQS: '/faqs',
  CATEGORIES: '/categories',
};

export const AUTH_ENDPOINTS = {
  EMAIL_VERIFY: `${API_RESOURCES.MEMBERS}/email/verify`,
  EMAIL_CONFIRM: `${API_RESOURCES.MEMBERS}/email/confirm`,
  SIGNUP_EMAIL: `${API_RESOURCES.MEMBERS}/signup/email`,
  RESET_PW: `${API_RESOURCES.MEMBERS}/password/reset`,
  SIGNIN_EMAIL: `${API_RESOURCES.MEMBERS}/login/email`,
  MYPAGE: `${API_RESOURCES.MEMBERS}/mypage`,
  SOCIAL_LOGIN: `${API_RESOURCES.MEMBERS}/social`,
  TERMS: `${API_RESOURCES.MEMBERS}/terms`,
  UPDATE_ACCESS_TOKEN: `${API_RESOURCES.MEMBERS}/update-token`,
};

export const PRODUCTS_ENDPOINTS = {
  LIST: `${API_RESOURCES.PRODUCTS}`,
  LATEST: `${API_RESOURCES.PRODUCTS}/latest-list`,
  DETAIL: (productId: string) => `${API_RESOURCES.PRODUCTS}/${productId}`,
  RECOMMEND: `${API_RESOURCES.PRODUCTS}/recommend`,
  PAGINATION: `${API_RESOURCES.PRODUCTS}/latest-list/page`,
};

export const CART_ENDPOINTS = {
  LIST: `${API_RESOURCES.CART}`,
  DETAIL: (cartItemId: string) => `${API_RESOURCES.CART}/${cartItemId}`,
};

export const ORDERS_ENDPOINTS = {
  CHECKOUT: `${API_RESOURCES.ORDERS}/checkout`,
  LIST: `${API_RESOURCES.ORDERS}`,
  DETAIL: (orderId: string) => `${API_RESOURCES.ORDERS}/${orderId}`,
};

export const PAYMENTS_ENDPOINTS = {
  CREATE: `${API_RESOURCES.PAYMENTS}`,
  CONFIRM: `${API_RESOURCES.PAYMENTS}/confirm/success`,
  DETAIL_BY_ORDER_ID: (orderId: string) =>
    `${API_RESOURCES.PAYMENTS}/orderId/${orderId}`,
  DETAIL_BY_PAYMENT_ID: (paymentId: string) =>
    `${API_RESOURCES.PAYMENTS}/paymentId/${paymentId}`,
};

export const REFUND_ENDPOINTS = {
  REQUEST: `${API_RESOURCES.REFUND}/request`,
};

export const REVIEW_ENDPOINTS = {
  REVIEWS_LATEST: (productId: string, size: number, reviewId?: number) =>
    `${API_RESOURCES.REVIEWS}/${productId}/latest?size=${size}${reviewId ? `&reviewId=${reviewId}` : ''}`,
  REVIEWS_LIKE: (
    productId: string,
    size: number,
    reviewId?: number,
    likeCount?: string,
  ) =>
    `${API_RESOURCES.REVIEWS}/${productId}/like?size=${size}${reviewId && likeCount ? `&reviewId=${reviewId}&likeCount=${likeCount.toString()}` : ''}`,
  REVIEWS_RATING: (
    productId: string,
    size: number,
    reviewId?: number,
    rating?: string,
  ) =>
    `${API_RESOURCES.REVIEWS}/${productId}/rating?size=${size}${reviewId && rating ? `&reviewId=${reviewId}&rating=${rating.toString()}` : ''}`,
  REVIEW_AVERAGE: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/average`,
  REVIEW_COUNTSTAR: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/countStar`,
  REVIEW_POSITIVE_AVERAGE: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/positiv`,
  LIKE: (reviewId: number) => `${API_RESOURCES.REVIEWS}/${reviewId}/reviewLike`,
  CREATE_REVIEW: API_RESOURCES.REVIEWS,
  ANALYZE_SENTIMENT: `${API_RESOURCES.REVIEWS}/analyze-sentiment`,
  REVIEW_FEEDBACK: `${API_RESOURCES.REVIEWS}/feedback`,
};

export const FAQS_ENDPOINTS = {
  BASE: API_RESOURCES.FAQS,
  MAIN_CATEGORIES: `${API_RESOURCES.FAQS}/categories/mainCategories`,
  SUB_CATEGORIES: (mainCategories: string) =>
    `${API_RESOURCES.FAQS}/categories/${mainCategories}/subcategories`,
  TOP: `${API_RESOURCES.FAQS}/top`,
  CATEGORY_FAQS: ({
    category,
    subCategory,
    page,
    size,
  }: CategoryFaqsRequestAPISchema) =>
    `${API_RESOURCES.FAQS}?category=${category}${subCategory && `&subcategory=${subCategory}`}&page=${page}&size=${size}`,
  SEARCH_FAQS: ({ query, page, size }: SearchFaqsRequestAPISchema) =>
    `${API_RESOURCES.FAQS}/search?query=${query}&page=${page}&size=${size}`,
};

export const CATEGORIES_ENDPOINTS = {
  LIST: `${API_RESOURCES.CATEGORIES}`,
  DETAIL: (categoryId: string) =>
    `${API_RESOURCES.CATEGORIES}/${categoryId}/products`,
};
