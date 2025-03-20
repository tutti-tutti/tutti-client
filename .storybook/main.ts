import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['public'],
  webpackFinal: async config => {
    process.env.STORYBOOK = 'true';

    if (process.env.STORYBOOK === 'true') {
      config.module?.rules?.push({
        test: /src\/services\/tokenService\.ts$/,
        use: 'null-loader',
      });
    }

    return config;
  },
};

export default config;
