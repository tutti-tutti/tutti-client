import ReviewList from './ReviewList';
import AverageReview from './AverageReview';

const ProductReview = async () => {
  return (
    <div>
      <AverageReview />
      <ReviewList />
    </div>
  );
};

export default ProductReview;
