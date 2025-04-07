import { cache } from 'react';

interface ProductParams {
  cursorId?: number;
  size: number;
}

export const productServerStore = cache(() => {
  const params: ProductParams = {
    cursorId: undefined,
    size: 20,
  };

  return {
    getParams: () => params,
    setParams: (newParams: Partial<ProductParams>) => {
      Object.assign(params, newParams);
    },
  };
});
