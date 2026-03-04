import type { StorybookConfig } from '@storybook/angular';
import theme from './theme';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
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
      
    }
  },
  staticDirs: ['../../../static'],
};

export default config;
