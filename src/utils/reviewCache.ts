import { cache } from 'react';

let reviewSortValue = '';

export const setReviewSort = cache((value: string) => {
  reviewSortValue = value;
  return value;
});

export const getReviewSort = cache(() => {
  return reviewSortValue || 'latest';
});
