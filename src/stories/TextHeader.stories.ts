import type { Meta, StoryObj } from '@storybook/react';

import TextHeader from '@/components/common/text-header';

const meta = {
  title: 'Tutti/TextHeader',
  component: TextHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: 'text',
      description: '사용자 이메일',
    },
    isLoggedIn: {
      control: 'boolean',
      description: '로그인 상태 여부',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} satisfies Meta<typeof TextHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    email: 'tutti@tutti.com',
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    email: 'tutti@tutti.com',
    isLoggedIn: true,
  },
};
