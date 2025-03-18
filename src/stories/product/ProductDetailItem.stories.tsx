import type { Meta, StoryObj } from '@storybook/react';

import { ProductDetailItem } from '@/components';

const sampleImage =
  'https://img.freepik.com/premium-vector/birthday-cake-illustration_190703-2.jpg?semt=ais_hybrid';

const meta: Meta<typeof ProductDetailItem> = {
  title: 'Product/ProductDetailItem',
  component: ProductDetailItem,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="max-w-7xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductDetailItem>;

export const Default: Story = {
  args: {
    titleUrl: sampleImage,
    name: '맛있는 초콜릿 케이크 (특별한 생일 선물용)',
    storeName: '뚜띠케이크',
    freeDelivery: true,
    almostOutOfStock: false,
    likes: 128,
    originalPrice: 38000,
    sellingPrice: 28500,
    maxPurchaseQuantity: 5,
    options: [
      {
        name: '크기',
        values: [
          { name: '1호 (15cm)', additionalPrice: 0 },
          { name: '2호 (18cm)', additionalPrice: 5000 },
          { name: '3호 (21cm)', additionalPrice: 10000 },
        ],
      },
      {
        name: '맛',
        values: [
          { name: '초콜릿', additionalPrice: 0 },
          { name: '바닐라', additionalPrice: 0 },
          { name: '딸기', additionalPrice: 2000 },
        ],
      },
      {
        name: '메시지 카드',
        values: [
          { name: '미포함', additionalPrice: 0 },
          { name: '생일 축하 메시지 (+3,000원)', additionalPrice: 3000 },
          { name: '기념일 축하 메시지 (+3,000원)', additionalPrice: 3000 },
        ],
      },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    ...Default.args,
    options: [],
  },
};

export const LimitedQuantity: Story = {
  args: {
    ...Default.args,
    maxPurchaseQuantity: 2,
  },
};
