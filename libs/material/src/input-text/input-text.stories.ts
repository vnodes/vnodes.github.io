import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputTextComponent } from './input-text';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  title: 'Input/Text',
};
export default meta;

type Story = StoryObj<InputTextComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {
    label:"Text label"
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Text label/gi)).toBeTruthy();
  },
};
