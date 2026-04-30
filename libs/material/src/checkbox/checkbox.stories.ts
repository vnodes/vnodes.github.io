import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Input/Checkbox',
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    label: "Checkbox Label"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Checkbox/gi)).toBeTruthy();
  },
};
