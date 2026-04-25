import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputDateComponent } from './input-date';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'Input/Date',
};
export default meta;

type Story = StoryObj<InputDateComponent>;

export const Primary: Story = {
  args: {
    label: "Date"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Date/gi)).toBeTruthy();
  },
};
