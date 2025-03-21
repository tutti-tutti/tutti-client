import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';

import type { IconType } from '@/types';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
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
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      defaultValue: 'left',
    },
    icon: {
      control: 'select',
      options: [
        undefined,
        'cancelCircle',
        'heart',
        'heartFill',
        'plus',
        'minus',
        'check',
        'search',
        'cart',
        'user',
      ] as (IconType | undefined)[],
      description: '버튼에 표시할 아이콘',
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

export const MoreView: Story = {
  args: {
    variant: 'transparent',
    icon: 'chevronsDown',
    iconPosition: 'right',
    children: '더보기',
    className: '!py-lg text-text-secondary w-full text-xl',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button with Icon',
    icon: 'heartFill',
  },
};

export const IconRight: Story = {
  args: {
    variant: 'primary',
    children: 'Icon Right',
    icon: 'heartFill',
    iconPosition: 'right',
  },
};

export const ScrollToTop: Story = {
  args: {
    variant: 'primary',
    icon: 'upArrow',
    iconProps: {
      width: 32,
      height: 32,
      style: {
        minWidth: '32px',
        minHeight: '32px',
        width: '32px',
        height: '32px',
      },
    },
    className:
      'bg-bg-primary text-text-primary hover:text-text-inverse active:text-text-inverse shadow-custom-effect h-32 w-16 rounded-full',
  },
};
