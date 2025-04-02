import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '@/components';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    Story => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLogin: false,
  },
};
