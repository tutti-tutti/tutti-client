import { cache } from 'react';

let reviewSortSearchParams = '';
let productIdParams = '';

export const setReviewSortSearchParams = cache((value: string) => {
  reviewSortSearchParams = value;
});

export const getReviewSortSearchParams = cache(() => {
  return reviewSortSearchParams || 'latest';
});

export const setProductIdParams = cache((value: string) => {
  productIdParams = value;
});

export const getProductIdParams = cache(() => {
  return productIdParams;
});
