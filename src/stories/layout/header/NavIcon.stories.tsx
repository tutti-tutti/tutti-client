import type { Meta, StoryObj } from '@storybook/react';

import { NavIcon } from '@/components';
import { PATH_NAME } from '@/constants';

const meta = {
  title: 'Layout/Header/NavIcon',
  component: NavIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: '아이콘 타입 (문자열)',
    },
    label: {
      control: 'text',
      description: '아이콘 아래 표시되는 텍스트',
    },
  },
} satisfies Meta<typeof NavIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountrySetting: Story = {
  args: {
    icon: 'nation',
    label: PATH_NAME.COUNTRY_SETTING,
  },
};

export const Cart: Story = {
  args: {
    icon: 'cart',
    label: PATH_NAME.CART,
  },
};

export const MyPage: Story = {
  args: {
    icon: 'user',
    label: PATH_NAME.MY_PAGE,
  },
};
