import type { Meta, StoryObj } from '@storybook/react';

import { CartInfo } from '@/components';
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
        <div className="max-w-7xl">
          <Story />
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
    initialCartItems: mockCartItems,
  },
};

export const EmptyCart: Story = {
  args: {
    initialCartItems: [],
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

      return <Story />;
    },
  ],
};
