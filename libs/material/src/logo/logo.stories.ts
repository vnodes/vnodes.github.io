import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { LogoComponent } from './logo';

const meta: Meta<LogoComponent> = {
  component: LogoComponent,
  title: 'LogoComponent',
};
export default meta;

type Story = StoryObj<LogoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/logo/gi)).toBeTruthy();
  },
};
