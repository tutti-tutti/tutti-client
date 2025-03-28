import type { Meta, StoryObj } from '@storybook/react';

import { RecommendProductItem } from '@/components';
import type { Product } from '@/types';

const sampleImage =
  'https://cdn-optimized.imweb.me/upload/S20240328110100ace0842/55757f8d5f03e.jpg';

const meta: Meta<typeof RecommendProductItem> = {
  title: 'Product/RecommendProductItem',
  component: RecommendProductItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ul className="max-w-sm">
        <Story />
      </ul>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RecommendProductItem>;

const defaultProduct: Product = {
  productId: 1,
  storeName: '오디오마스터',
  name: '프리미엄 무선 이어폰 - 노이즈 캔슬링 탑재 고음질 블루투스 이어버드',
  titleUrl: sampleImage,
  originalPrice: 129000,
  sellingPrice: 89000,
  likes: 123,
  createdAt: new Date(),
  freeDelivery: false,
  almostOutOfStock: false,
  productOptionItems: [],
  maxPurchaseQuantity: 1,
};

export const Default: Story = {
  args: {
    ...defaultProduct,
  },
};

export const LongProductName: Story = {
  args: {
    ...defaultProduct,
    name: '[2024년 신형] 초고음질 프리미엄 무선 이어폰 - 액티브 노이즈 캔슬링 탑재, 최대 36시간 재생 가능, IPX7 방수 등급, 퀵 차지 지원, 멀티 페어링 블루투스 이어버드',
  },
};

export const NoDiscount: Story = {
  args: {
    ...defaultProduct,
    originalPrice: 89000,
    sellingPrice: 89000,
  },
};
