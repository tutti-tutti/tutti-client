import { PRODUCTS_CONSTANTS } from '@/constants';
import { fetchRecommededProducts } from '@/services';
import RecommendCarousel from './RecommendCarousel';

const RecommendProductList = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const recommendedProducts = await fetchRecommededProducts();

  return (
    <div className="gap-sm md:gap-3xl py-lg md:py-xl border-border-secondary flex flex-col border-y">
      <h2 className="font-style-subHeading text-brand-gradient text-center">
        {PRODUCTS_CONSTANTS.getRecommendListTitle(categoryName)}
      </h2>
      <RecommendCarousel recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default RecommendProductList;
