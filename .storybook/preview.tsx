import React from 'react';

import type { Preview } from '@storybook/react';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ fontFamily: 'Pretendard' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
