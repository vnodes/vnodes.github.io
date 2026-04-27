import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { SelectComponent } from './select';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'Input/Select',
};
export default meta;

type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "thrid", label: "Thrid" },
    ],
    placeholder: "Placeholder",
    label: "Label"
  },
};

export const Multiple: Story = {
  args: {
    ...Primary.args,
    multiple: true,
  },
};

export const Heading: Story = {
  args: {
    ...Primary.args
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Label/gi)).toBeTruthy();
    await expect(canvas.getByText(/Placeholder/gi)).toBeTruthy();
  },
};
