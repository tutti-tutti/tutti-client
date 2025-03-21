import type { Meta, StoryObj } from '@storybook/react';
import ResetPasswordPage from '@/app/(auth)/reset-password/page';

const meta = {
  title: 'Pages/Auth/ResetPasswordPage',
  component: ResetPasswordPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResetPasswordPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
