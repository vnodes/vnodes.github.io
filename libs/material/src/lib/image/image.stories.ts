import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { Image } from './image';

const meta: Meta<Image> = {
  component: Image,
  title: 'Image/Image',

  argTypes: {
    alt: { type: 'string' },
    src: { type: 'string' },
    width: { type: 'number' },
    height: { type: 'number' },
  },
};
export default meta;

type Story = StoryObj<Image>;

export const Primary: Story = {
  args: {
    alt: 'Alt Text',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText(/Alt Text/gi)).toBeTruthy();
  },
};
