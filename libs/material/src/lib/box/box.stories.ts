import type { Meta, StoryObj } from '@storybook/angular';
import { Box } from './box';

const meta: Meta<Box> = {
  component: Box,
  title: 'Container/Box',
  argTypes: {
    size: { control: 'number' },
    heightRatio: { control: 'number' },
    widthRatio: { control: 'number' },
    unit: { control: 'select', options: ['px', '%'] },
  },
};
export default meta;

type Story = StoryObj<Box>;

export const Primary: Story = {};
