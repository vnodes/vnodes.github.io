import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputModelNumberComponent } from './input-model-number';

const meta: Meta<InputModelNumberComponent> = {
  component: InputModelNumberComponent,
  title: 'InputModel/Number',
};
export default meta;

type Story = StoryObj<InputModelNumberComponent>;

export const Primary: Story = {
  args: {
    name: "number",
    label: "Label",
    type: "number",
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Label/gi)).toBeTruthy();
  },
};
