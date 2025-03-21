import { authHandlers } from './authHandlers';
import {
  productsHandlers,
  recommendedProductsHandlers,
  productDetailHandlers,
} from './productsHandlers';
import { cartHandlers } from './cartHandlers';

export const handlers = [
  ...authHandlers,
  ...productsHandlers,
  ...recommendedProductsHandlers,
  ...productDetailHandlers,
  ...cartHandlers,
];
