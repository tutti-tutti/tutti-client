import { http, HttpResponse } from 'msw';

import { getMswEndpoint } from '@/utils';
import { products } from '@/mocks';
import { PRODUCTS_ENDPOINTS } from '@/constants';

export const productsHandlers = [
  // http.get(getMswEndpoint(PRODUCTS_ENDPOINTS.LATEST), () => {
  //   return HttpResponse.json(products);
  // }),
];

export const recommendedProductsHandlers = [
  http.get(getMswEndpoint(PRODUCTS_ENDPOINTS.RECOMMEND), () => {
    return HttpResponse.json(products);
  }),
];

export const productDetailHandlers = [
  // http.get(
  //   getMswEndpoint(PRODUCTS_ENDPOINTS.DETAIL(':productId')),
  //   ({ params }) => {
  //     const { productId } = params;
  //     const product = products.find(
  //       item => item.productId.toString() === productId,
  //     );
  //     if (!product) {
  //       return new HttpResponse(null, { status: 404 });
  //     }
  //     return HttpResponse.json(product);
  //   },
  // ),
];
