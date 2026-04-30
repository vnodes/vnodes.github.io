import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'CheckboxComponent',
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    label: "Input/Checkbox"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Checkbox/gi)).toBeTruthy();
  },
};
