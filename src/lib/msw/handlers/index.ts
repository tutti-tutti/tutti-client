import { authHandlers } from './authHandlers';
import {
  productsHandlers,
  recommendedProductsHandlers,
  productDetailHandlers,
} from './productsHandlers';

export const handlers = [
  ...authHandlers,
  ...productsHandlers,
  ...recommendedProductsHandlers,
  ...productDetailHandlers,
];
