export interface CreateReviewState {
  success: boolean;
  ratingError?: string;
  reviewContentError?: string;
  error?: string;
}

export interface ProductReviewInfo {
  productId: number;
  avg: string;
  totalCount: number;
}
