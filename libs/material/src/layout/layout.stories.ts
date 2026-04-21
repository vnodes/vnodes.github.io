import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { LayoutComponent } from './layout';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'LayoutComponent',
};
export default meta;

type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/layout/gi)).toBeTruthy();
  },
};
