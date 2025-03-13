import { authHandlers } from './authHandlers';
import {
  productsHandlers,
  recommendedProductsHandlers,
} from './productsHandlers';

export const handlers = [
  ...authHandlers,
  ...productsHandlers,
  ...recommendedProductsHandlers,
];
