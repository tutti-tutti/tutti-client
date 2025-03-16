import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@/components';

const meta: Meta<typeof Switch> = {
  title: 'Switch/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultValue: false,
  },
};

export const InitiallyOn: Story = {
  args: {
    defaultValue: true,
  },
};
