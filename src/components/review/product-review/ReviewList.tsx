import ReviewFilter from '@/components/review/product-review/ReviewFilter';
import ReviewItem from '@/components/review/product-review/ReviewItem';

type SentimentType = 'positive' | 'negative';

const temp = {
  reviews: [
    {
      id: 1,
      productItemId: 1,
      nickname: 'tutti',
      content: '배송이 빠르고 좋아요!',
      rating: 4.5,
      reviewImageUrls: ['string'],
      likeCount: 15,
      sentiment: 'positive' as SentimentType,
      sentimentProbability: 95.2,
      createdAt: '2025-03-24T15:44:18.430Z',
    },
  ],
  cursor: 0,
};

const ReviewList = () => {
  return (
    <div>
      <ReviewFilter />
      {temp.reviews.map(review => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
