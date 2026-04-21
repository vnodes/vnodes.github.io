import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { SampleComponent } from './sample';

const meta: Meta<SampleComponent> = {
  component: SampleComponent,
  title: 'SampleComponent',
};
export default meta;

type Story = StoryObj<SampleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/sample/gi)).toBeTruthy();
  },
};
