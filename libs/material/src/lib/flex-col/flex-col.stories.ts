import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { FlexCol } from './flex-col';

const meta: Meta<FlexCol> = {
  component: FlexCol,
  title: 'Container/FlexCol',
};
export default meta;

type Story = StoryObj<FlexCol>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/flex-col/gi)).toBeTruthy();
  },
};
