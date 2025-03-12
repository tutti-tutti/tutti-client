import { userHandlers } from './userHandlers';
import { productsHandlers } from './productsHandlers';

export const handlers = [...userHandlers, ...productsHandlers];
