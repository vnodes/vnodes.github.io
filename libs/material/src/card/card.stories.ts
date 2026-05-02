import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'Card/Card',
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    title: "Card title",
    subTitle: "Card subtitle",
    content: ["Line 1", "line 2"],
    avatarSrc: "./favicon.png",
    imgSrc: "./favicon.png",
  }
};
