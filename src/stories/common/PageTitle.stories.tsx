import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '@/components';

const meta = {
  title: 'Common/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
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
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '페이지 제목',
  },
};
