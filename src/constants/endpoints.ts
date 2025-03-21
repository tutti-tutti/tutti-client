export const { SERVER_API_BASE_URL, NEXT_PUBLIC_API_ROUTE_BASE_URL } =
  process.env;

const API_RESOURCES = {
  MEMBERS: '/members',
  PRODUCTS: '/products',
  CART: '/cart',
  FAQS: '/faqs',
};

export const AUTH_ENDPOINTS = {
  EMAIL_VERIFY: `${API_RESOURCES.MEMBERS}/email/verify`,
  EMAIL_CONFIRM: `${API_RESOURCES.MEMBERS}/email/confirm`,
  SIGNUP_EMAIL: `${API_RESOURCES.MEMBERS}/signup/email`,
  RESET_PW: `${API_RESOURCES.MEMBERS}/password/reset`,
  SIGNIN_EMAIL: `${API_RESOURCES.MEMBERS}/login/email`,
};

export const PRODUCTS_ENDPOINTS = {
  LIST: `${API_RESOURCES.PRODUCTS}`,
  LATEST: `${API_RESOURCES.PRODUCTS}/latest`,
  DETAIL: (productId: string) => `${API_RESOURCES.PRODUCTS}/${productId}`,
  RECOMMEND: `${API_RESOURCES.PRODUCTS}/recommend`,
};

export const CART_ENDPOINTS = {
  LIST: `${API_RESOURCES.CART}`,
  DETAIL: (cartItemId: string) => `${API_RESOURCES.CART}/${cartItemId}`,
};

export const FAQ_ENDPOINTS = {
  BASE: API_RESOURCES.FAQS,
  MAIN_CATEGORIES: `${API_RESOURCES.FAQS}/categories/mainCategories`,
  SUB_CATEGORIES: (mainCategories: string) =>
    `${API_RESOURCES.FAQS}/categories/${mainCategories}/subcategories`,
  TOP: `${API_RESOURCES.FAQS}/top`,
  CATEGORY_FAQS: ({
    category,
    subCategory,
  }: {
    category: string;
    subCategory: string;
  }) =>
    `${API_RESOURCES.FAQS}?category=${category}${subCategory && `&subcategory=${subCategory}`}`,
};
