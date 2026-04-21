import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { WebLayoutComponent } from './web-layout';

const meta: Meta<WebLayoutComponent> = {
  component: WebLayoutComponent,
  title: 'WebLayoutComponent',
};
export default meta;

type Story = StoryObj<WebLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/web-layout/gi)).toBeTruthy();
  },
};
