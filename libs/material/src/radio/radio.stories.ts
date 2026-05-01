import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { RadioComponent } from './radio';

const meta: Meta<RadioComponent> = {
  component: RadioComponent,
  title: 'Input/Radio',
};
export default meta;

type Story = StoryObj<RadioComponent>;

export const Primary: Story = {
  args: {
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "thrid", label: "Thrid" },
    ],
    label: "Radio"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Radio/gi)).toBeTruthy();
  },
};
