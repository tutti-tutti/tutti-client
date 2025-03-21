import type { Meta, StoryObj } from '@storybook/react';

import { TextHeader } from '@/components';

const meta = {
  title: 'Header/TextHeader',
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
    country: {
      control: 'text',
      description: '사용자 국가',
    },
  },
} satisfies Meta<typeof TextHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    email: 'tutti@tutti.com',
    country: '한국',
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    email: 'tutti@tutti.com',
    country: '한국',
    isLoggedIn: true,
  },
};
