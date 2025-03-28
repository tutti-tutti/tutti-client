import React from 'react';

import type { Preview } from '@storybook/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      router: {
        basePath: '/',
      },
    },
  },
  decorators: [
    Story => (
      <QueryClientProvider client={new QueryClient()}>
        <div style={{ fontFamily: 'Pretendard' }}>
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
