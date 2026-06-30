import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputFieldComponent } from './input-field';

const meta: Meta<InputFieldComponent> = {
  component: InputFieldComponent,
  title: 'Input/InputField',
};
export default meta;

type Story = StoryObj<InputFieldComponent>;

export const Primary: Story = {
  args: {
    label: 'Label',
    type: 'text',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Label/gi)).toBeTruthy();
  },
};
