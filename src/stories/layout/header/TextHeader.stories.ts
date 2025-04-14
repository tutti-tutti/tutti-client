import type { Meta, StoryObj } from '@storybook/react';

import { TextHeader } from '@/components';

const meta = {
  title: 'Layout/Header/TextHeader',
  component: TextHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLogin: {
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
    country: '한국',
    isLogin: false,
  },
};

export const LoggedIn: Story = {
  args: {
    country: '한국',
    isLogin: true,
  },
};
