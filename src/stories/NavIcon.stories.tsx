import type { Meta, StoryObj } from '@storybook/react';

import {
  NavIcon,
  HeaderNavigation,
  NationIcon,
  CartIcon,
  UserIcon,
} from '@/components';
import { ROUTER_PATH, PATH_NAME } from '@/constants';

const meta = {
  title: 'Header/NavIcon',
  component: NavIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '링크 경로',
    },
    icon: {
      control: { type: 'object' },
      description: '아이콘 컴포넌트',
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
    href: ROUTER_PATH.COUNTRY_SETTING,
    icon: <NationIcon />,
    label: PATH_NAME.COUNTRY_SETTING,
  },
};

export const Cart: Story = {
  args: {
    href: ROUTER_PATH.CART,
    icon: <CartIcon />,
    label: PATH_NAME.CART,
  },
};

export const MyPage: Story = {
  args: {
    href: ROUTER_PATH.MY_PAGE,
    icon: <UserIcon />,
    label: PATH_NAME.MY_PAGE,
  },
};

export const All: Story = {
  args: {
    href: '',
    icon: <HeaderNavigation />,
    label: '',
  },
  render: () => <HeaderNavigation />,
};
