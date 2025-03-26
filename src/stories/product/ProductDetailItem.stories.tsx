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
    productItems: [
      {
        productItemId: 1,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 0,
      },
      {
        productItemId: 2,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 0,
      },
      {
        productItemId: 3,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 2000,
      },
      {
        productItemId: 4,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 5000,
      },
      {
        productItemId: 5,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 5000,
      },
      {
        productItemId: 6,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 7000,
      },
      {
        productItemId: 7,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 10000,
      },
      {
        productItemId: 8,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 10000,
      },
      {
        productItemId: 9,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 12000,
      },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    ...Default.args,
    productItems: [
      {
        productItemId: 10,
        firstOptionName: null,
        firstOptionValue: null,
        secondOptionName: null,
        secondOptionValue: null,
        additionalPrice: null,
      },
    ],
  },
};

export const LimitedQuantity: Story = {
  args: {
    ...Default.args,
    maxPurchaseQuantity: 2,
  },
};
