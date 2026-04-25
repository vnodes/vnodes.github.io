import { type Meta, type StoryObj } from '@storybook/angular';
import { FormAddress } from './form-address';
import { FormLogin } from './form-login';

const meta: Meta<FormAddress> = {
  component: FormAddress,
  title: 'SampleForms/Address',
};
export default meta;

type Story = StoryObj<FormLogin>;

export const Primary: Story = {
  args: {}
};
