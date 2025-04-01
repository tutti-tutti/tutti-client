import type { Meta, StoryObj } from '@storybook/react';

import NotFound from '@/app/not-found';

const meta = {
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
