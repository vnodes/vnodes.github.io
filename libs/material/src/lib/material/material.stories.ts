import type { Meta, StoryObj } from '@storybook/angular';
import { Material } from './material';
import { expect } from 'storybook/test';

const meta: Meta<Material> = {
  component: Material,
  title: 'Material',

  tags: ['autodocs'],
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
