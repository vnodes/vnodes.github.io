import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { Material } from './material';

const meta: Meta<Material> = {
  component: Material,
  title: 'Material',

};
export default meta;

type Story = StoryObj<Material>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/material/gi)).toBeTruthy();
  },
};
