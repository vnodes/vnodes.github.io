import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputTimeComponent } from './input-time';

const meta: Meta<InputTimeComponent> = {
  component: InputTimeComponent,
  title: 'Input/Time',
};
export default meta;

type Story = StoryObj<InputTimeComponent>;

export const Primary: Story = {
  args: {
    label: "Time"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Time/gi)).toBeTruthy();
  },
};
