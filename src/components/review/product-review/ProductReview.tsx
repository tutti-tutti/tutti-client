import ReviewList from '@/components/review/product-review/ReviewList';
import AverageReview from '@/components/review/product-review/AverageReview';

const ProductReview = async ({ productId }: { productId: string }) => {
  console.log(productId);
  return (
    <div>
      <AverageReview />
      <ReviewList />
    </div>
  );
};

export default ProductReview;
