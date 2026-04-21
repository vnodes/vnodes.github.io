import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { MobileLayoutComponent } from './mobile-layout';

const meta: Meta<MobileLayoutComponent> = {
  component: MobileLayoutComponent,
  title: 'MobileLayoutComponent',
};
export default meta;

type Story = StoryObj<MobileLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/mobile-layout/gi)).toBeTruthy();
  },
};
