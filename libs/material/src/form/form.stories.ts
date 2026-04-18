import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { FormComponent } from './form';

const meta: Meta<FormComponent> = {
  component: FormComponent,
  title: 'Form/FormComponent',
};
export default meta;

type Story = StoryObj<FormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/form/gi)).toBeTruthy();
  },
};
