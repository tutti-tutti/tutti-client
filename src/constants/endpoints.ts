import type {
  CategoryFaqsRequestAPISchema,
  SearchFaqsRequestAPISchema,
} from '@/types';

export const { SERVER_API_BASE_URL } = process.env;

export const API_RESOURCES = {
  MEMBERS: '/members',
  PRODUCTS: '/products',
  CART: '/cart',
  REVIEWS: '/reviews',
  FAQS: '/faqs',
};

export const AUTH_ENDPOINTS = {
  EMAIL_VERIFY: `${API_RESOURCES.MEMBERS}/email/verify`,
  EMAIL_CONFIRM: `${API_RESOURCES.MEMBERS}/email/confirm`,
  SIGNUP_EMAIL: `${API_RESOURCES.MEMBERS}/signup/email`,
  RESET_PW: `${API_RESOURCES.MEMBERS}/password/reset`,
  SIGNIN_EMAIL: `${API_RESOURCES.MEMBERS}/login/email`,
  MYPAGE: `${API_RESOURCES.MEMBERS}/mypage`,
  SOCIAL_LOGIN: `${API_RESOURCES.MEMBERS}/social`,
};

export const PRODUCTS_ENDPOINTS = {
  LIST: `${API_RESOURCES.PRODUCTS}`,
  LATEST: `${API_RESOURCES.PRODUCTS}/latest-list`,
  DETAIL: (productId: string) => `${API_RESOURCES.PRODUCTS}/${productId}`,
  RECOMMEND: `${API_RESOURCES.PRODUCTS}/recommend`,
};

export const CART_ENDPOINTS = {
  LIST: `${API_RESOURCES.CART}`,
  DETAIL: (cartItemId: string) => `${API_RESOURCES.CART}/${cartItemId}`,
};

export const REVIEW_ENDPOINTS = {
  REVIEWS_LATEST: (productId: string, size: number, reviewId?: number) =>
    `${API_RESOURCES.REVIEWS}/${productId}/latest?size=${size}${reviewId ? `&reviewId=${reviewId}` : ''}`,
  REVIEWS_LIKE: (
    productId: string,
    size: number,
    reviewId?: number,
    likeCount?: number,
  ) =>
    `${API_RESOURCES.REVIEWS}/${productId}/like?size=${size}${reviewId ? `&reviewId=${reviewId}` : ''}${likeCount ? `&likeCount=${likeCount}` : ''}`,
  REVIEWS_RATING: (
    productId: string,
    size: number,
    reviewId?: number,
    rating?: number,
  ) =>
    `${API_RESOURCES.REVIEWS}/${productId}/rating?size=${size}${reviewId ? `&reviewId=${reviewId}` : ''}${rating ? `&rating=${rating}` : ''}`,
  REVIEW_AVERAGE: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/average`,
  REVIEW_COUNTSTAR: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/countStar`,
  REVIEW_POSITIVE_AVERAGE: (productId: string) =>
    `${API_RESOURCES.REVIEWS}/${productId}/positiv`,
  REVIEW_DETAIL: (reviewId: number) => `${API_RESOURCES.REVIEWS}/${reviewId}`,
  LIKE: (reviewId: number) => `${API_RESOURCES.REVIEWS}/${reviewId}/reviewLike`,
  CREATE_REVIEW: API_RESOURCES.REVIEWS,
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
