import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';

const meta: Meta<typeof Button> = {
  title: 'TUTTI/button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'primaryOutline',
        'secondaryOutline',
        'disabled',
        'tertiaryOutline',
        'transparent',
        'likeOn',
        'likeOff',
      ],
      defaultValue: 'primary',
    },
    children: {
      control: 'text',
      defaultValue: 'button',
    },
    icon: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: 'primaryOutline',
    children: 'primaryOutline button',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondaryOutline',
    children: 'secondaryOutline button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    children: 'disabled button',
  },
};

export const TertiaryOutline: Story = {
  args: {
    variant: 'tertiaryOutline',
    children: 'tertiaryOutline button',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'transparent button',
  },
};

export const LikeOn: Story = {
  args: {
    variant: 'likeOn',
    children: 'likeOn',
  },
};

export const LikeOff: Story = {
  args: {
    variant: 'likeOff',
    children: 'likeOff',
  },
};
