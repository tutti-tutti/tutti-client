import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components';

const meta: Meta<typeof Badge> = {
  title: 'Common/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'primary',
    },
    style: {
      control: 'select',
      options: ['default', 'subtle', 'subtleSquare', 'outlineSquare', 'dot'],
      defaultValue: 'default',
    },
    children: {
      control: 'text',
      defaultValue: 'button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 기본 색상별 스토리
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'primary',
    style: 'default',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'secondary',
    style: 'default',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'success',
    style: 'default',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'warning',
    style: 'default',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: 'danger',
    style: 'default',
  },
};

// 모든 스타일을 표시하는 스토리 추가
const colors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
] as const;
const styles = [
  'default',
  'subtle',
  'subtleSquare',
  'outlineSquare',
  'dot',
] as const;

export const AllStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {colors.map(color => (
        <div key={color} className="flex flex-col gap-2">
          <h3 className="text-lg font-bold capitalize">{color}</h3>
          <StyleGrid color={color} />
        </div>
      ))}
    </div>
  ),
};

const StyleGrid = ({ color }: { color: (typeof colors)[number] }) => (
  <div className="flex flex-wrap gap-4">
    {styles.map(style => (
      <div key={style} className="flex flex-col items-center">
        <Badge color={color} style={style}>
          {style}
        </Badge>
      </div>
    ))}
  </div>
);

// 각 색상별 스타일 스토리
export const PrimaryStyles: Story = {
  render: () => <StyleGrid color="primary" />,
};

export const SecondaryStyles: Story = {
  render: () => <StyleGrid color="secondary" />,
};

export const SuccessStyles: Story = {
  render: () => <StyleGrid color="success" />,
};

export const WarningStyles: Story = {
  render: () => <StyleGrid color="warning" />,
};

export const DangerStyles: Story = {
  render: () => <StyleGrid color="danger" />,
};
