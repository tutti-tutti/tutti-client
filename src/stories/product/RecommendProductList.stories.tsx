import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RecommendCarousel } from '@/components';
import { recommededProductsQueryOptions } from '@/queries';
import type { Product } from '@/types';

const sampleImage =
  'https://cdn-optimized.imweb.me/upload/S20240328110100ace0842/55757f8d5f03e.jpg';

const generateProducts = (count: number): Product[] => {
  return Array(count)
    .fill(null)
    .map((_, index) => ({
      productId: index + 1,
      storeName: `스토어 ${index + 1}`,
      name: '긴 상품명 예시 - 프리미엄 무선 이어폰 노이즈 캔슬링 탑재 고음질 블루투스 이어버드 최신형',
      titleUrl: sampleImage,
      originalPrice: 100000 + index * 10000,
      sellingPrice:
        index % 2 === 0
          ? (100000 + index * 10000) * 0.7
          : 100000 + index * 10000,
      likes: 50 + index,
      createdAt: new Date(),
      freeDelivery: index % 3 === 0,
      almostOutOfStock: index % 4 === 0,
      productItems: [
        {
          productItemId: index + 1,
          firstOptionName: index % 2 === 0 ? '색상' : null,
          firstOptionValue: index % 2 === 0 ? '블랙' : null,
          secondOptionName: index % 3 === 0 ? '사이즈' : null,
          secondOptionValue: index % 3 === 0 ? 'M' : null,
          additionalPrice: index % 4 === 0 ? 5000 : null,
        },
      ],
      maxPurchaseQuantity: 1,
    }));
};

const createQueryClient = (products: Product[]) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const queryKey = recommededProductsQueryOptions.queryKey;
  queryClient.setQueryData(queryKey, products);

  return queryClient;
};

const meta: Meta<typeof RecommendCarousel> = {
  title: 'Product/RecommendCarousel',
  component: RecommendCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecommendCarousel>;

export const Default: Story = {
  decorators: [
    Story => {
      const products = generateProducts(12);
      const queryClient = createQueryClient(products);

      return (
        <QueryClientProvider client={queryClient}>
          <div className="mx-auto max-w-7xl p-6">
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};
