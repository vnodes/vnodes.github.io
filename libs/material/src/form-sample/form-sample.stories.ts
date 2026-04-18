import type { Meta, StoryObj } from '@storybook/angular';
import { FormSampleComponent } from './form-sample';

const meta: Meta<FormSampleComponent> = {
  component: FormSampleComponent,
  title: 'Form/FormSampleComponent',
};
export default meta;

type Story = StoryObj<FormSampleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    // await expect(canvas.getByText(/form-sample/gi)).toBeTruthy();
  },
};
