import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { NavListComponent } from './nav-list';

const meta: Meta<NavListComponent> = {
  component: NavListComponent,
  title: 'List/Nav',
};
export default meta;

type Story = StoryObj<NavListComponent>;

export const Primary: Story = {

};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/nav-list/gi)).toBeTruthy();
  },
};
