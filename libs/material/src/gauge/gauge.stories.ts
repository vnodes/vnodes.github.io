import type { Meta, StoryObj } from '@storybook/angular';
import { GaugeComponent } from './gauge';

const meta: Meta<GaugeComponent> = {
  component: GaugeComponent,
  title: 'Input/Gauge',
};
export default meta;

type Story = StoryObj<GaugeComponent>;

export const Primary: Story = {
  args: {
    value: 0,
    label: 'label'
  },
};

