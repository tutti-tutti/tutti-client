import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@/components';

const meta = {
  title: 'Footer/Footer',
  component: Footer,
  parameters: {
    layout: 'bottom',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
