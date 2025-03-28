import { fetchReviewIsLike, fetchReviews } from '@/services';
import { getProductIdParams } from '@/utils';
import ReviewFilter from './ReviewFilter';
import ReviewItem from './ReviewItem';

interface ReviewItemAPISchema {
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
}

const ReviewList = async () => {
  const productIdParams = getProductIdParams();
  const reviews = await fetchReviews(productIdParams, 10);

  return (
    <div>
      <ReviewFilter />
      {reviews.reviews.map(async (review: ReviewItemAPISchema) => {
        const isLiked = await fetchReviewIsLike(review.id);

        return <ReviewItem key={review.id} {...review} isLiked={isLiked} />;
      })}
    </div>
  );
};

export default ReviewList;
