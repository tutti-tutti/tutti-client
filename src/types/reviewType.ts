export interface CreateReviewState {
  success: boolean;
  ratingError?: string;
  reviewContentError?: string;
  error?: string;
}

export interface ReviewPageParam {
  reviewId?: number;
  extraData?: number;
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

export interface ReviewsResponse {
  reviews: ReviewItemAPISchema[];
  cursor: ReviewPageParam;
  hasNext: boolean;
}
