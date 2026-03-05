import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { FlexRow } from './flex-row';

const meta: Meta<FlexRow> = {
  component: FlexRow,
  title: 'Container/FlexRow',
};
export default meta;

type Story = StoryObj<FlexRow>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/flex-row/gi)).toBeTruthy();
  },
};
