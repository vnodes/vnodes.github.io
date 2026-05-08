import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { FieldsetComponent } from './fieldset';

const meta: Meta<FieldsetComponent> = {
  component: FieldsetComponent,
  title: 'Input/Fieldset',
};
export default meta;

type Story = StoryObj<FieldsetComponent>;

export const Primary: Story = {
  args: {
    label: "Label"
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Label/gi)).toBeTruthy();
  },
};
