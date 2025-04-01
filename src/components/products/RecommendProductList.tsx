import { PRODUCTS_CONSTANTS } from '@/constants';
import { fetchRecommededProducts } from '@/services';
import RecommendCarousel from './RecommendCarousel';
import { Icon } from '../common';

const RecommendProductList = async ({
  categoryName,
}: {
  categoryName?: string;
}) => {
  const recommendedProducts = await fetchRecommededProducts();
  const titleContent =
    categoryName && PRODUCTS_CONSTANTS.getRecommendListTitle(categoryName);

  return (
    <div className="gap-sm md:gap-3xl py-lg md:py-xl border-border-secondary flex flex-col border-y">
      <div className="gap-sm flex items-center justify-center">
        <Icon iconName="tinyLogo" />
        <h2 className="font-style-subHeading text-brand-gradient text-center">
          {titleContent ? (
            <>
              <span className="whitespace-pre-line md:hidden">
                {titleContent.mobile}
              </span>
              <span className="hidden md:inline">{titleContent.desktop}</span>
            </>
          ) : (
            <span>
              고객님의 데이터가 아직 없어 좋아요순으로 상품을 추천한 리스트에요!
            </span>
          )}
        </h2>
      </div>
      <RecommendCarousel recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default RecommendProductList;
