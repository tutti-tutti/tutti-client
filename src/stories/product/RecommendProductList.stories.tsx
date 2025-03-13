import type { Meta, StoryObj } from '@storybook/react';

import { RecommendCarousel } from '@/components';
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
    }));
};

const meta: Meta<typeof RecommendCarousel> = {
  title: 'Product/RecommendCarousel',
  component: RecommendCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="mx-auto max-w-7xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RecommendCarousel>;

export const Default: Story = {
  args: {
    products: generateProducts(12),
  },
};
