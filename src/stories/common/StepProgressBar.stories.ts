import type { Meta, StoryObj } from '@storybook/react';

import { StepProgressBar } from '@/components';

const meta: Meta<typeof StepProgressBar> = {
  title: 'Common/StepProgressBar',
  component: StepProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: 'text',
      description: '현재 활성화된 단계',
    },
    steps: {
      control: 'object',
      description: '바에 표시할 단계들',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepProgressBar>;

export const Default: Story = {
  args: {
    currentStep: '장바구니',
    steps: ['장바구니', '주문결제', '주문완료'],
  },
};

export const SecondStep: Story = {
  args: {
    currentStep: '주문결제',
    steps: ['장바구니', '주문결제', '주문완료'],
  },
};

export const LastStep: Story = {
  args: {
    currentStep: '주문완료',
    steps: ['장바구니', '주문결제', '주문완료'],
  },
};

export const TwoSteps: Story = {
  args: {
    currentStep: '정보 입력',
    steps: ['정보 입력', '가입 완료'],
  },
};

export const CustomSteps: Story = {
  args: {
    currentStep: 'Step 2',
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
  },
};
