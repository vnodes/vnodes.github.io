import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { LayoutWebComponent } from './layout-web';

const meta: Meta<LayoutWebComponent> = {
  component: LayoutWebComponent,
  title: 'LayoutWebComponent',
};
export default meta;

type Story = StoryObj<LayoutWebComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/layout-web/gi)).toBeTruthy();
  },
};
