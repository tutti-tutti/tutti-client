import { fetchProducts } from '@/services';
import type { Product } from '@/types';
import ProductItem from './ProductItem';

const ProductList = async () => {
  const productItems = await fetchProducts();

  return (
    <section>
      <ul className="gap-x-md gap-y-7xl py-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productItems.map((item: Product) => (
          <ProductItem key={item.productId} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
