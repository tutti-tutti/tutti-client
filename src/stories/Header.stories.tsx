import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/layout/header/Header';

const meta = {
  title: 'Tutti/Header',
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

export const Default: Story = {};
