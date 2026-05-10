import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider';

const meta: Meta<SliderComponent> = {
  component: SliderComponent,
  title: 'Gallery/Slider',
};
export default meta;

type Story = StoryObj<SliderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    // 
  },
};
