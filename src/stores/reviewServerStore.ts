import { cache } from 'react';

interface ReviewParams {
  productIdParams: string;
  reviewSortSearchParams: string;
}

export const reviewServerStore = cache(() => {
  const params: ReviewParams = {
    productIdParams: '',
    reviewSortSearchParams: 'latest',
  };

  return {
    getParams: () => params,
    setParams: (newParams: Partial<ReviewParams>) => {
      Object.assign(params, {
        ...newParams,
        reviewSortSearchParams: newParams.reviewSortSearchParams || 'latest',
      });
    },
  };
});
