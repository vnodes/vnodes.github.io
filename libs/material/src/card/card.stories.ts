import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card/gi)).toBeTruthy();
  },
};
