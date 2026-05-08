import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent } from 'storybook/test';
import { AutocompleteComponent } from './autocomplete';

const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'Input/Autocomplete',
};
export default meta;

type Story = StoryObj<AutocompleteComponent>;

const args: Story['args'] = {
  label: "Label",
  options: [
    { value: "First", label: "First" },
    { value: "Second", label: "Second" },
    { value: "Third", label: "Third" },
  ],
  hint: "Hint",
  iconPrefix: "input",
  iconSuffix: "output"
}

export const Primary: Story = {
  args
};

export const Heading: Story = {
  args,
  play: async ({ canvas, step }) => {
    const label = canvas.getByText(/Label/gi)
    const input = canvas.getByLabelText(/Label/gi);
    const hint = canvas.getByText(/Hint/gi)


    await step("should render input and label", async () => {
      await expect(label).toBeTruthy();
      await expect(input).toBeTruthy();
      await expect(hint).toBeTruthy();
    });

    await step("should display the options", async ({ canvas }) => {
      await userEvent.click(input);
      expect(canvas.getByText(/First/gi)).toBeDefined();
      expect(canvas.getByText(/Second/gi)).toBeDefined();
      expect(canvas.getByText(/Third/gi)).toBeDefined();
    })

    await step("should filter the options upon input event", async ({ canvas }) => {
      await userEvent.type(input, "Fi");
      const firstOption = canvas.getByText(/First/gi);
      expect(firstOption).toBeDefined();
      await userEvent.clear(input);
    })

    await step('should pick the option upon click', async ({ canvas }) => {
      await userEvent.click(input);
      const firstOption = canvas.getByText(/First/gi);
      await userEvent.click(firstOption);

    })
  },
};
