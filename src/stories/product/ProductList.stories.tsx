import type { Meta, StoryObj } from '@storybook/react';

import { ProductItem } from '@/components';
import type { Product, ProductReviewInfo } from '@/types';

const ProductItemWithReview = (props: Product) => {
  const reviewInfo: ProductReviewInfo = {
    productId: props.productId,
    avg: '4.5',
    totalCount: 42,
  };

  return <ProductItem {...props} reviewInfo={reviewInfo} />;
};

const ProductListMock = ({ products }: { products: Product[] }) => {
  return (
    <section>
      <ul className="gap-x-md gap-y-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map(item => (
          <ProductItemWithReview key={item.productId} {...item} />
        ))}
      </ul>
    </section>
  );
};

const sampleImage =
  'https://cdn-optimized.imweb.me/upload/S20240328110100ace0842/55757f8d5f03e.jpg';

const createProduct = (id: number): Product => ({
  productId: id,
  storeName: '오디오마스터',
  name: '프리미엄 무선 이어폰 - 노이즈 캔슬링 탑재 고음질 블루투스 이어버드',
  titleUrl: sampleImage,
  originalPrice: 129000,
  sellingPrice: 89000,
  likes: 123,
  createdAt: new Date(),
  freeDelivery: true,
  almostOutOfStock: true,
  productOptionItems: [],
  maxPurchaseQuantity: 1,
});

const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }, (_, index) => createProduct(index + 1));
};

const meta: Meta<typeof ProductListMock> = {
  title: 'Product/ProductList',
  component: ProductListMock,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="container mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductListMock>;

export const ThreeProducts: Story = {
  args: {
    products: generateProducts(3),
  },
};

export const SixProducts: Story = {
  args: {
    products: generateProducts(6),
  },
};

export const ResponsiveGridTest: Story = {
  args: {
    products: generateProducts(12),
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
