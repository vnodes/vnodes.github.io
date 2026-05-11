import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { InputModelCheckboxComponent } from './input-model-checkbox';

const meta: Meta<InputModelCheckboxComponent> = {
  component: InputModelCheckboxComponent,
  title: 'InputModel/Checkbox',
};
export default meta;

type Story = StoryObj<InputModelCheckboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/input-model-checkbox/gi)).toBeTruthy();
  },
};
