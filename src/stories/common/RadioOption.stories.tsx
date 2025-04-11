import type { Meta, StoryObj } from '@storybook/react';

import { RadioOption } from '@/components';

const meta: Meta<typeof RadioOption> = {
  title: 'Common/RadioOption',
  component: RadioOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    option: {
      description: '라디오 옵션에 표시할 항목',
      control: 'object',
    },
    isSelected: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioOption>;

export const Default: Story = {
  args: {
    option: { value: 'option1', label: '기본 옵션' },
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    option: { value: 'option1', label: '선택된 옵션' },
    isSelected: true,
  },
};

export const OptionGroup: Story = {
  render: args => (
    <div className="gap-xs flex flex-col">
      <RadioOption
        option={{ value: 'option1', label: '첫 번째 옵션' }}
        isSelected={true}
        onClick={args.onClick}
      />
      <RadioOption
        option={{ value: 'option2', label: '두 번째 옵션' }}
        isSelected={false}
        onClick={args.onClick}
      />
    </div>
  ),
};
