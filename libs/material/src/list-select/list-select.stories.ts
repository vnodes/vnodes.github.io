import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { ListSelectComponent } from './list-select';

const meta: Meta<ListSelectComponent> = {
  component: ListSelectComponent,
  title: 'Input/ListSelect',
};
export default meta;

type Story = StoryObj<ListSelectComponent>;

export const Primary: Story = {

  args: {

    label: "List select",
    options: [
      { label: "First", value: "First" },
      { label: "Second", value: "Second" },
      { label: "Third", value: "Third" },
    ]
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/List select/gi)).toBeTruthy();
  },
};
