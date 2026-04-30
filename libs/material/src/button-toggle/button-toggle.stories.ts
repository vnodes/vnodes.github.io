import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { ButtonToggleComponent } from './button-toggle';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'Input/ButtonToggleComponent',
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

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/button-toggle/gi)).toBeTruthy();
  },
};
