import { type Meta, type StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputText } from './input-text';


const meta: Meta<InputText> = {
  component: InputText,
  title: 'Input/InputText',
};
export default meta;

type Story = StoryObj<InputText>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Not set/gi)).toBeTruthy();
  },
};
