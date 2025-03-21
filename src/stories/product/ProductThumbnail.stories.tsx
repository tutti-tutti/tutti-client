import type { Meta, StoryObj } from '@storybook/react';

import { ProductThumbnail } from '@/components';

const sampleImage =
  'https://cdn-optimized.imweb.me/upload/S20240328110100ace0842/55757f8d5f03e.jpg';

const meta: Meta<typeof ProductThumbnail> = {
  title: 'Product/ProductThumbnail',
  component: ProductThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: '제품 이미지 URL',
    },
    name: {
      control: 'text',
      description: 'alt 텍스트로 사용됨',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
    className: {
      control: 'text',
    },
    isDim: {
      control: 'boolean',
      description: '호버 시 dim 처리 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductThumbnail>;

export const Thumbnail: Story = {
  args: {
    imageUrl: sampleImage,
    name: '일반 썸네일',
    height: 'h-60',
    width: 'w-60',
  },
};

export const Large: Story = {
  args: {
    imageUrl: sampleImage,
    name: '큰 사이즈의 썸네일',
    height: 'h-[400px]',
    width: 'w-[400px]',
  },
};

export const Small: Story = {
  args: {
    imageUrl: sampleImage,
    name: '작은 사이즈의 썸네일',
    height: 'h-20',
    width: 'w-20',
  },
};

export const WithCustomStyling: Story = {
  args: {
    imageUrl: sampleImage,
    name: '커스텀 스타일 썸네일',
    height: 'h-60',
    width: 'w-60',
    className: 'shadow-lg border-2 border-gray-200',
  },
};

export const Dimmed: Story = {
  args: {
    imageUrl: sampleImage,
    name: '호버 시 dim 처리되는 썸네일',
    height: 'h-60',
    width: 'w-60',
    isDim: true,
  },
};
