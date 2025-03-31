import { REVIEW_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib';

const fetchReviewsLatest = async (
  productId: string,
  size: number,
  reviewId?: number,
) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEWS_LATEST(productId, size, reviewId),
  );

  return data;
};

const fetchReviewsLike = async (
  productId: string,
  size: number,
  reviewId?: number,
  likeCount?: string,
) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEWS_LIKE(productId, size, reviewId, likeCount),
  );

  return data;
};

const fetchReviewsRating = async (
  productId: string,
  size: number,
  reviewId?: number,
  rating?: string,
) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEWS_RATING(productId, size, reviewId, rating),
  );

  return data;
};

export const fetchReviews = async (
  productId: string,
  reviewSort: string,
  size: number,
  reviewId?: number,
  extraData?: string,
) => {
  if (reviewSort === 'latest')
    return await fetchReviewsLatest(productId, size, reviewId);

  if (reviewSort === 'like')
    return await fetchReviewsLike(productId, size, reviewId, extraData);

  if (reviewSort === 'rating')
    return await fetchReviewsRating(productId, size, reviewId, extraData);
};

export const reviewLike = async (reviewId: number) => {
  const { data } = await axiosInstance.post(REVIEW_ENDPOINTS.LIKE(reviewId));

  return data.liked;
};

export const fetchReviewAverage = async (productId: string) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEW_AVERAGE(productId),
  );

  return data;
};

export const fetchReviewCountStar = async (productId: string) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEW_COUNTSTAR(productId),
  );

  return data;
};

export const fetchReviewPositiveAverage = async (productId: string) => {
  const { data } = await axiosInstance.get(
    REVIEW_ENDPOINTS.REVIEW_POSITIVE_AVERAGE(productId),
  );

  return data;
};

export const createReview = async (
  orderId: string,
  productItemId: string,
  rating: number,
  content: string,
  nickname: string,
) => {
  const numberOrderId = Number(orderId);
  const numberProductItemId = Number(productItemId);

  const { data } = await axiosInstance.post(REVIEW_ENDPOINTS.CREATE_REVIEW, {
    orderId: numberOrderId,
    productItemId: numberProductItemId,
    rating,
    content,
    nickname,
    reviewImages: [''],
  });

  return data;
};
