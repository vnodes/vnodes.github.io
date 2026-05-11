import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { FormModelComponent } from './form-model';

const meta: Meta<FormModelComponent> = {
  component: FormModelComponent,
  title: 'FormModelComponent',
};
export default meta;

type Story = StoryObj<FormModelComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/form-model/gi)).toBeTruthy();
  },
};
