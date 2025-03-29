import {
  ProductList,
  RecommendProductList,
  ProductCategory,
} from '@/components';

const HomePage = () => {
  return (
    <div className="gap-lg md:gap-7xl flex flex-col">
      <ProductCategory />
      <RecommendProductList categoryName="식료품" />
      <ProductList />
    </div>
  );
};

export default HomePage;
