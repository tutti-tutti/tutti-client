import type { Meta, StoryObj } from '@storybook/react';

import { ORDER_STATUS_LIST } from '@/constants';
import { OrderStatusBadge } from '@/components';

const [READY, DONE, CANCELED] = ORDER_STATUS_LIST;

const meta: Meta<typeof OrderStatusBadge> = {
  title: 'Orders/OrderStatusBadge',
  component: OrderStatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orderStatus: {
      control: 'select',
      options: ORDER_STATUS_LIST,
      defaultValue: DONE,
    },
  },
};

export default meta;
type Story = StoryObj<typeof OrderStatusBadge>;

// 모든 주문상태를 표시하는 스토리 추가

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {ORDER_STATUS_LIST.map(orderStatus => (
        <div key={orderStatus} className="flex flex-col gap-2">
          <h3 className="text-lg font-bold capitalize">{orderStatus}</h3>
          <OrderStatusBadge orderStatus={orderStatus} />
        </div>
      ))}
    </div>
  ),
};

// 각 상태별 스토리
export const Ready: Story = {
  args: {
    orderStatus: READY,
  },
};

export const Done: Story = {
  args: {
    orderStatus: DONE,
  },
};

export const Canceled: Story = {
  args: {
    orderStatus: CANCELED,
  },
};
