export interface CreateReviewState {
  success: boolean;
  ratingError?: string;
  reviewContentError?: string;
  error?: string;
}

export interface ReviewItemAPISchema {
  id: number;
  productItemId: number;
  nickname: string;
  content: string;
  rating: number;
  reviewImageUrls: string[];
  likeCount: number;
  sentiment: 'positive' | 'negative';
  sentimentProbability: number;
  createdAt: string;
  liked?: boolean;
}

export interface CreateReviewState {
  success: boolean;
  ratingError?: string;
  reviewContentError?: string;
  error?: string;
}

export interface ReviewPageParam {
  reviewId?: number;
  likeCount?: number;
  rating?: number;
  extraData?: string;
}

export interface ReviewsResponse {
  reviews: ReviewItemAPISchema[];
  cursor: ReviewPageParam;
  hasNext: boolean;
}

export interface ProductReviewInfo {
  productId: number;
  avg: string;
  totalCount: number;
}
