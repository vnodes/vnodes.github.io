import type { Meta, StoryObj } from '@storybook/angular';
import { Layout } from './layout';

const meta: Meta<Layout> = {
  component: Layout,
  title: 'layout/Layout',
};
export default meta;

type Story = StoryObj<Layout>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    // await expect(canvas.getByText(/layout/gi)).toBeTruthy();
  },
};
