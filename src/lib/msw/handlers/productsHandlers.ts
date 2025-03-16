import { http, HttpResponse } from 'msw';

import { products } from '@/mocks';
import { PRODUCTS_ENDPOINTS } from '@/constants';

export const productsHandlers = [
  http.get(PRODUCTS_ENDPOINTS.LIST, () => {
    return HttpResponse.json(products);
  }),
];

export const recommendedProductsHandlers = [
  http.get(PRODUCTS_ENDPOINTS.RECOMMEND, () => {
    return HttpResponse.json(products);
  }),
];

export const productDetailHandlers = [
  http.get(PRODUCTS_ENDPOINTS.DETAIL, ({ params }) => {
    const { productId } = params;
    let product;
    products.forEach(p => {
      const foundProduct = p.latestList.find(
        item => item.productId.toString() === productId,
      );
      if (foundProduct) {
        product = foundProduct;
      }
    });

    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  }),
];
