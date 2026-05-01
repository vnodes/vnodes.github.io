import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { CheckboxGroupComponent } from './checkbox-group';

const meta: Meta<CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title: 'Input/CheckboxGroup',
};
export default meta;

type Story = StoryObj<CheckboxGroupComponent>;

export const Primary: Story = {
  args: {

    label: "Checkbox Group",
    options: [
      { label: "First", value: "First" },
      { label: "Second", value: "Second" },
      { label: "Third", value: "Third" },
    ]
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Checkbox Group/gi)).toBeTruthy();
  },
};
