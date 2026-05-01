import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { SlideToggleComponent } from './slide-toggle';

const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'Input/SlideToggle',
};
export default meta;

type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {
    label: "Slide Toggle"
  }
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Slide Toggle/gi)).toBeTruthy();
  },
};
