import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from '@/components';

const meta: Meta<typeof Toast> = {
  title: 'Toast/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: '토스트에 표시할 메시지',
    },
    type: {
      control: { type: 'radio' },
      options: ['success', 'error'],
      description: '토스트 유형 (성공/오류)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: '성공적으로 처리되었습니다.',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: '오류가 발생했습니다. 다시 시도해주세요.',
    type: 'error',
  },
};
