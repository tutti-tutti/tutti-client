import type { Meta, StoryObj } from '@storybook/react';
import { fn, expect, waitFor, userEvent, within } from '@storybook/test';

import { SearchInput } from '@/components';

const meta = {
  title: 'Layout/Header/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '검색창에 표시되는 안내 텍스트',
    },
    onChange: {
      action: 'changed',
      description: '입력값이 변경될 때 호출되는 함수',
    },
    value: {
      control: 'text',
      description: '검색창의 초기 입력값',
    },
    className: {
      control: 'text',
      description: '추가적인 스타일링을 위한 클래스명',
    },
    debounceTime: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '입력 후 onChange가 트리거되기까지의 지연 시간',
    },
  },
  args: {
    placeholder: '현재 찾고 싶은 상품을 검색해주세요!',
    onChange: fn(),
    debounceTime: 300,
    className: 'w-[500px]',
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitialValue: Story = {
  args: {
    value: '딸기주스',
  },
};

export const CustomDebounceTime: Story = {
  args: {
    debounceTime: 1000,
  },
};

export const FormSubmit: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // 입력 필드와 검색 버튼 가져오기
    const input = canvas.getByPlaceholderText(
      '현재 찾고 싶은 상품을 검색해주세요!',
    );
    const searchButton = canvas.getByLabelText('search');

    // 사용자 입력 시뮬레이션
    await userEvent.type(input, '검색어 입력 테스트');

    // 디바운스 시간 기다리기
    await waitFor(
      () => {
        expect(args.onChange).toHaveBeenCalledWith('검색어 입력 테스트');
      },
      { timeout: 1000 },
    );

    // 검색 버튼 클릭
    await userEvent.click(searchButton);

    // 폼 제출 후 입력 필드가 비워졌는지 확인
    expect(input).toHaveValue('');
  },
};
