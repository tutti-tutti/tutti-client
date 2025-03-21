import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '@/components';

const dummyOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '드롭다운에 나올 옵션 배열',
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
    defaultValue: {
      control: 'object',
    },
  },
  decorators: [
    Story => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: dummyOptions,
    placeholder: '옵션을 선택하세요',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: dummyOptions,
    defaultValue: { value: 'option2', label: '옵션 2' },
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 10 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `옵션 ${i + 1}`,
    })),
    placeholder: '옵션을 선택하세요',
  },
};
