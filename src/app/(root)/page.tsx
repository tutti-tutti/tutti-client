import {
  ProductList,
  RecommendProductList,
  ProductCategory,
  MainIntroduction,
} from '@/components';

const HomePage = () => {
  return (
    <div className="gap-lg md:gap-7xl -mt-16 flex flex-col md:-mt-48">
      <MainIntroduction />
      <ProductCategory />
      <RecommendProductList categoryName="식료품" />
      <ProductList />
    </div>
  );
};

export default HomePage;
