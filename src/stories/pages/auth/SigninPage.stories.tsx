import type { Meta, StoryObj } from '@storybook/react';

import SigninPage from '@/app/(auth)/signin/page';

const meta = {
  title: 'Pages/Auth/SigninPage',
  component: SigninPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => {
      return (
        <div className="relative m-auto h-screen max-w-[512px]">
          <main className="px-container absolute top-1/2 w-full -translate-y-1/2">
            <Story />
          </main>
        </div>
      );
    },
  ],
} satisfies Meta<typeof SigninPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
