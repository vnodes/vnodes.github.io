import { type Meta, type StoryObj } from '@storybook/angular';
import { FormProduct } from './form-product';

const meta: Meta<FormProduct> = {
  component: FormProduct,
  title: 'SampleForms/Product',
};
export default meta;

type Story = StoryObj<FormProduct>;

export const Primary: Story = {
};
