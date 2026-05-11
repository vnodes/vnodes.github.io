import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputModelTextComponent } from './input-model-text';

const meta: Meta<InputModelTextComponent> = {
  component: InputModelTextComponent,
  title: 'InputModelTextComponent',
};
export default meta;

type Story = StoryObj<InputModelTextComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input-model-text/gi)).toBeTruthy();
  },
};
