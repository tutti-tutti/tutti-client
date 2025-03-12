import { http, HttpResponse } from 'msw';

import { products } from '@/mocks';
import { PRODUCTS_ENDPOINTS } from '@/constants';

export const productsHandlers = [
  http.get(PRODUCTS_ENDPOINTS.LIST, () => {
    return HttpResponse.json(products);
  }),
];
