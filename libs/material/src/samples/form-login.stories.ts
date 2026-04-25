import { type Meta, type StoryObj } from '@storybook/angular';
import { FormLogin } from './form-login';

const meta: Meta<FormLogin> = {
  component: FormLogin,
  title: 'SampleForms/Login',
};

export default meta;

type Story = StoryObj<FormLogin>;

export const Primary: Story = {};

