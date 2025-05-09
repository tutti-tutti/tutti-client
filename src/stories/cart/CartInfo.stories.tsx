import type { Meta, StoryObj } from '@storybook/react';

import { CartInfo, CartHeader } from '@/components';
import { mockCartStore, restoreCartStore, createMockCartItems } from '@/stores';

const mockCartItems = createMockCartItems();

const meta: Meta<typeof CartInfo> = {
  title: 'Cart/CartInfo',
  component: CartInfo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => {
      return (
        <div className="layout-max-width m-auto">
          <main className="px-container py-5xl">
            <Story />
          </main>
        </div>
      );
    },
  ],
  play: async () => {
    restoreCartStore();
  },
};

export default meta;
type Story = StoryObj<typeof CartInfo>;

export const Default: Story = {
  args: {
    isLoggedIn: false,
  },
  decorators: [
    Story => {
      mockCartStore({
        items: mockCartItems,
        checkedItems: mockCartItems.reduce(
          (acc, item) => ({
            ...acc,
            [item.productItemId]: true,
          }),
          {},
        ),
      });

      return <Story />;
    },
  ],
};

export const WithCartHeader: Story = {
  args: {
    isLoggedIn: false,
  },
  decorators: [
    Story => {
      mockCartStore({
        items: mockCartItems,
        checkedItems: mockCartItems.reduce(
          (acc, item) => ({
            ...acc,
            [item.productItemId]: true,
          }),
          {},
        ),
      });

      return (
        <>
          <CartHeader />
          <Story />
        </>
      );
    },
  ],
};

export const EmptyCartWithCartHeader: Story = {
  args: {
    isLoggedIn: false,
  },
  decorators: [
    Story => {
      mockCartStore({
        items: [],
        checkedItems: {},
        totalPrice: 0,
        discountPrice: 0,
        deliveryPrice: 0,
        finalPrice: 0,
        checkedCount: 0,
        isAllSelected: false,
      });

      return (
        <>
          <CartHeader />
          <Story />
        </>
      );
    },
  ],
};
