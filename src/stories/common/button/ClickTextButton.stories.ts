import type { Meta, StoryObj } from '@storybook/react';
import { ClickTextButton } from '@/components';

const meta: Meta<typeof ClickTextButton> = {
  title: 'Common/Button/ClickTextButton',
  component: ClickTextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: '텍스트 버튼',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ClickTextButton>;

export const Default: Story = {
  args: {
    children: '텍스트 버튼',
  },
};
