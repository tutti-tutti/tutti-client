import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components';

const meta: Meta<typeof Checkbox> = {
  title: 'Common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '기본 체크박스',
  },
};

export const Checked: Story = {
  args: {
    label: '체크된 체크박스',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 체크박스',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};
