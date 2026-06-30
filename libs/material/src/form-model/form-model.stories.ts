import type { Meta, StoryObj } from '@storybook/angular';
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
