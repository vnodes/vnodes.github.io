import { FormGroup } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { FormComponent } from './form';

const meta: Meta<FormComponent> = {
  component: FormComponent,
  title: 'Input/FormComponent',
};
export default meta;

type Story = StoryObj<FormComponent>;

export const Primary: Story = {
  args: {
    formGroup: {} as FormGroup
  },
};

