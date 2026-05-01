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
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/fieldset/gi)).toBeTruthy();
  },
};
