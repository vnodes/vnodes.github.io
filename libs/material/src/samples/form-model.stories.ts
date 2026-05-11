import { type Meta, type StoryObj } from '@storybook/angular';
import { FormModelSampleComponent } from './form-model';

const meta: Meta<FormModelSampleComponent> = {
    component: FormModelSampleComponent,
    title: 'SampleForms/ModelForm',
};

export default meta;

type Story = StoryObj<FormModelSampleComponent>;

export const Primary: Story = {};

