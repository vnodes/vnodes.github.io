import { type Meta, type StoryObj } from '@storybook/angular';
import { FormAddress } from '@vnodes/material/samples';


const meta: Meta<FormAddress> = {
  component: FormAddress,
  title: 'SampleForms/Address',
};
export default meta;

type Story = StoryObj<FormAddress>;

export const Primary: Story = {
  args: {}
};
