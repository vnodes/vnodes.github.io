import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputIntComponent } from './input-int';

const meta: Meta<InputIntComponent> = {
  component: InputIntComponent,
  title: 'Input/Int',
  tags: ["autodoc"]
};
export default meta;

type Story = StoryObj<InputIntComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input-int/gi)).toBeTruthy();
  },
};
