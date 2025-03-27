import { REVIEW_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib';

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
