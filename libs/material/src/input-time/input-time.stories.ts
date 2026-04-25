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
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input-time/gi)).toBeTruthy();
  },
};
