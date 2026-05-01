import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { ButtonToggleComponent } from './button-toggle';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'Input/ButtonToggle',
};
export default meta;

type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {
    options: [
      { value: 'First', label: 'First' },
      { value: 'Second', label: 'Second' },
      { value: 'Third', label: 'Third' },
    ],
    label: "Select Button"
  },
};

export const Size: Story = {
  args: {
    options: [
      { value: 'SX', label: 'SX' },
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
      { value: 'XL', label: 'XL' },
      { value: 'XXL', label: 'XXL' },
    ],
    label: "Size", 
  }
}

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/First/gi)).toBeTruthy();
    await expect(canvas.getByText(/Second/gi)).toBeTruthy();
  },
};
