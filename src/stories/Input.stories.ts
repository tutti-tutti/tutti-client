import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '입력 필드 위에 표시되는 라벨',
    },
    name: {
      control: 'text',
      description: '입력 필드의 name 속성',
    },
    icon: {
      control: 'boolean',
      description: '오른쪽에 아이콘을 표시할지 여부',
    },
    error: {
      control: 'text',
      description: '오류 메시지',
    },
    success: {
      control: 'text',
      description: '성공 메시지',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드 비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'default',
    placeholder: '텍스트를 입력하세요',
  },
};

export const WithLabel: Story = {
  args: {
    label: '이메일',
    name: 'email',
    placeholder: '이메일을 입력하세요',
  },
};

export const WithIcon: Story = {
  args: {
    name: 'with-icon',
    placeholder: '텍스트를 입력하세요',
    icon: 'cancelCircle',
  },
};

export const WithError: Story = {
  args: {
    name: 'with-error',
    placeholder: '텍스트를 입력하세요',
    error: '이 필드는 필수입니다',
  },
};

export const WithSuccess: Story = {
  args: {
    name: 'with-success',
    placeholder: '텍스트를 입력하세요',
    success: '입력이 유효합니다',
  },
};

export const WithLabelAndIcon: Story = {
  args: {
    label: '이름',
    name: 'name',
    placeholder: '이름을 입력하세요',
    icon: 'cancelCircle',
  },
};

export const WithLabelIconAndError: Story = {
  args: {
    label: '비밀번호',
    name: 'password',
    placeholder: '비밀번호를 입력하세요',
    icon: 'cancelCircle',
    error: '비밀번호는 8자 이상이어야 합니다',
    type: 'password',
  },
};

export const WithLabelIconAndSuccess: Story = {
  args: {
    label: '사용자명',
    name: 'username',
    placeholder: '사용자명을 입력하세요',
    icon: 'cancelCircle',
    success: '사용자명을 사용할 수 있습니다',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    placeholder: '이 필드는 비활성화되어 있습니다',
    disabled: true,
  },
};

export const DisabledWithLabelAndIcon: Story = {
  args: {
    label: '주소',
    name: 'address',
    placeholder: '이 필드는 비활성화되어 있습니다',
    icon: 'cancelCircle',
    disabled: true,
  },
};
