import type { Meta, StoryObj } from '@storybook/react';

import { PATH_NAME, ROUTER_PATH } from '@/constants';
import {
  PageContentHeader,
  PageTitle,
  CartHeader,
  CheckoutHeader,
  MypageHeader,
} from '@/components';

const meta = {
  title: 'Common/PageContentHeader',
  component: PageContentHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '페이지 제목 내용',
    },
    className: {
      control: 'text',
      description: '추가적인 클래스명',
    },
  },
  decorators: [
    Story => {
      return (
        <div className="layout-max-width m-auto">
          <main className="px-container">
            <Story />
          </main>
        </div>
      );
    },
  ],
} satisfies Meta<typeof PageContentHeader>;

export default meta;
type Story = StoryObj<typeof PageContentHeader>;

export const Default: Story = {
  args: {
    children: <PageTitle>기본 페이지 제목</PageTitle>,
  },
};

export const CartHeaderComponent: Story = {
  args: {},
  render: () => <CartHeader />,
};

export const CheckoutHeaderComponent: Story = {
  args: {},
  render: () => <CheckoutHeader />,
};

const linkItems = [
  { label: PATH_NAME.HOME, href: ROUTER_PATH.HOME },
  { label: PATH_NAME.MY_PAGE, href: '', isCurrent: true },
  {
    label: PATH_NAME.ORDER_HISTORY,
    href: ROUTER_PATH.ORDERS_HISTORY,
    isCurrent: true,
  },
];

export const MypageHeaderComponent: Story = {
  args: {},
  render: () => (
    <MypageHeader linkItems={linkItems} pageName={PATH_NAME.ORDER_HISTORY} />
  ),
};
