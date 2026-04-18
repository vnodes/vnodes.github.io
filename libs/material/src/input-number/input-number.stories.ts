import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputNumberComponent } from './input-number';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'Form/Number',
};
export default meta;

type Story = StoryObj<InputNumberComponent>;

export const Number: Story = {
  args: {
    label: "Number label"
  },
};

export const Integer: Story = {
  args: {
    type: "integer",
    label: "Integer label"
  },
};
export const Range10: Story = {
  args: {
    type: "number",
    label: "Integer label",
    min: 0,
    max: 10
  },
};

export const Heading: Story = {
  ...Number,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Number Label/gi)).toBeTruthy();
  },
};
