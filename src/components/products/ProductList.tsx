import { fetchProducts } from '@/services';
import ClientProductList from './ClientProductList';

const ProductList = async () => {
  const initialProducts = await fetchProducts();

  return <ClientProductList initialProducts={initialProducts} />;
};

export default ProductList;
