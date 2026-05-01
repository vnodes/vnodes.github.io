import { type Meta, type StoryObj } from '@storybook/angular';
import { SampleLayoutComponent } from './sample-layout';

const meta: Meta<SampleLayoutComponent> = {
  component: SampleLayoutComponent,
  title: 'Layout/Sample',
};

export default meta;

type Story = StoryObj<SampleLayoutComponent>;

export const Primary: Story = {};

