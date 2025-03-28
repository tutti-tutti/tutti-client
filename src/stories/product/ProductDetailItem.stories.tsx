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
    maxPurchaseQuantity: 5,
    productOptionItems: [
      {
        productItemId: 1,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 0,
        discountPrice: 0,
        sellingPrice: 28500,
      },
      {
        productItemId: 2,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 0,
        discountPrice: 0,
        sellingPrice: 28500,
      },
      {
        productItemId: 3,
        firstOptionName: '크기',
        firstOptionValue: '1호 (15cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 1000,
        discountPrice: 0,
        sellingPrice: 29500,
      },
      {
        productItemId: 4,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 2000,
        discountPrice: 0,
        sellingPrice: 30500,
      },
      {
        productItemId: 5,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 5000,
        discountPrice: 0,
        sellingPrice: 33500,
      },
      {
        productItemId: 6,
        firstOptionName: '크기',
        firstOptionValue: '2호 (18cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 5000,
        discountPrice: 0,
        sellingPrice: 35500,
      },
      {
        productItemId: 7,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '초콜릿',
        additionalPrice: 10000,
        discountPrice: 0,
        sellingPrice: 38500,
      },
      {
        productItemId: 8,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '바닐라',
        additionalPrice: 10000,
        discountPrice: 0,
        sellingPrice: 38500,
      },
      {
        productItemId: 9,
        firstOptionName: '크기',
        firstOptionValue: '3호 (21cm)',
        secondOptionName: '맛',
        secondOptionValue: '딸기',
        additionalPrice: 12000,
        discountPrice: 0,
        sellingPrice: 40500,
      },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    ...Default.args,
    productOptionItems: [
      {
        productItemId: 10,
        firstOptionName: null,
        firstOptionValue: null,
        secondOptionName: null,
        secondOptionValue: null,
        additionalPrice: 0,
        discountPrice: 0,
        sellingPrice: 28500,
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
