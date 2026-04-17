import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input/Input',
};
export default meta;

type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input/gi)).toBeTruthy();
  },
};
