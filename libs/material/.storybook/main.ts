import type { StorybookConfig } from '@storybook/angular';
import theme from './theme';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',

    options: {
      builder: {
        viteConfigPath: 'vite.config.mts',
      },
      compodoc: {
        compodocJson: '../documentation.json',
      },
      theme,
    },
  },
  staticDirs: ['../../../dist/apps/web/browser'],
  docs: {
    defaultName: 'Doc',
  },
  webpackFinal: async (config) => {
    if (config.mode === 'production') {
      config.output ??= {};
      config.output.publicPath = './';
    }
    return config;
  },
};

export default config;
