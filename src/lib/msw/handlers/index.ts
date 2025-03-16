import { userHandlers } from './userHandlers';
import {
  productsHandlers,
  recommendedProductsHandlers,
  productDetailHandlers,
} from './productsHandlers';

export const handlers = [
  ...userHandlers,
  ...productsHandlers,
  ...recommendedProductsHandlers,
  ...productDetailHandlers,
];
