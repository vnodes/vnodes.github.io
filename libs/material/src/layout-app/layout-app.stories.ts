import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { LayoutAppComponent } from './layout-app';

const meta: Meta<LayoutAppComponent> = {
  component: LayoutAppComponent,
  title: 'Layout/App',
};
export default meta;

type Story = StoryObj<LayoutAppComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/layout-app/gi)).toBeTruthy();
  },
};
