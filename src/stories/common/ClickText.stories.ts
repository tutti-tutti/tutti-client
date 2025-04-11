import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ClickText } from '@/components';

const meta = {
  title: 'Common/ClickText',
  component: ClickText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '클릭 시 이동할 링크 주소',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태 여부',
    },
    children: {
      control: 'text',
      description: '표시할 텍스트 내용',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
  args: {
    onClick: fn(),
    children: 'Text',
    href: '#',
  },
} satisfies Meta<typeof ClickText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    href: '#',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    href: '#',
    disabled: true,
  },
};
