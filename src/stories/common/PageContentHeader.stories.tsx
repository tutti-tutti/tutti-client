import type { Meta, StoryObj } from '@storybook/react';

import { PATH } from '@/constants';
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

const { ORDER_HISTORY, HOME, MY_PAGE } = PATH;
const LINK_ITEMS = [
  { label: HOME.name, href: HOME.path },
  { label: MY_PAGE.name, href: '', isCurrent: true },
  {
    label: ORDER_HISTORY.name,
    href: ORDER_HISTORY.path,
    isCurrent: true,
  },
];

export const MypageHeaderComponent: Story = {
  args: {},
  render: () => (
    <MypageHeader linkItems={LINK_ITEMS} pageName={ORDER_HISTORY.name} />
  ),
};
