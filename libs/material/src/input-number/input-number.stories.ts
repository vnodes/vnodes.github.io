import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputNumberComponent } from './input-number';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'Input/Number',
};
export default meta;

type Story = StoryObj<InputNumberComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input-number/gi)).toBeTruthy();
  },
};
