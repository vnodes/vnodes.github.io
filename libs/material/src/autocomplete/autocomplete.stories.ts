import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { AutocompleteComponent } from './autocomplete';

const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'Input/Autocomplete',
};
export default meta;

type Story = StoryObj<AutocompleteComponent>;

export const Primary: Story = {
  args: {
    label: "Autocomplete",
    options: [
      { value: "First", label: "First" },
      { value: "Second", label: "Second" },
      { value: "Third", label: "Third" },
    ]
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Autocomplete/gi)).toBeTruthy();
  },
};
