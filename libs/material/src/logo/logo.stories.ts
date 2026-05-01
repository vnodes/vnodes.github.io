import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { LogoComponent } from './logo';

const meta: Meta<LogoComponent> = {
  component: LogoComponent,
  title: 'Img/Logo',
};
export default meta;

type Story = StoryObj<LogoComponent>;

export const Primary: Story = {


  args: {
    alt: "Logo"
  }
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText(/Logo/gi)).toBeTruthy();
  },
};
