import { userHandlers } from './userHandlers';
import {
  productsHandlers,
  recommendedProductsHandlers,
} from './productsHandlers';

export const handlers = [
  ...userHandlers,
  ...productsHandlers,
  ...recommendedProductsHandlers,
];
