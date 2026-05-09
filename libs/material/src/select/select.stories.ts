import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent } from 'storybook/test';
import { SelectComponent } from './select';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'Input/Select',
};
export default meta;

type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "thrid", label: "Thrid" },
    ],
    label: "Label"
  },
};

export const Multiple: Story = {
  args: {
    ...Primary.args,
    multiple: true,
  },
};

export const Heading: Story = {
  args: {
    ...Primary.args
  },
  play: async ({ canvas, step }) => {

    const input = canvas.getByLabelText("Label")
    await step("should render the label", async ({ canvas }) => {
      await expect(canvas.getByText(/Label/gi)).toBeTruthy();
    })


    await step("should click the select", async ({ canvas }) => {
      const openSelect = async () => await userEvent.click(input);

      await openSelect();
      const firstOption = await canvas.findByText("First");
      const secondOption = await canvas.findByText("Second");
      const thirdOption = await canvas.findByText("Thrid");

      await userEvent.click(firstOption, { delay: 600 })
      await openSelect();
      await userEvent.click(secondOption, { delay: 600 })
      await openSelect();
      await userEvent.click(thirdOption, { delay: 600 })
    })


  },
};
