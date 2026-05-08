import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent } from 'storybook/test';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Input/Checkbox',
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

const args: Story['args'] = {

  label: "Label"

}
export const Primary: Story = {
  args
};

export const Heading: Story = {
  args,
  play: async ({ canvas, step }) => {

    const input = canvas.getByText(/Label/gi);

    await step("should render the checkbox", async () => {
      await expect(input).toBeTruthy();
    })



    await step("should click the checkbox", async () => {
      await userEvent.click(input, { delay: 400 });
      await userEvent.click(input, { delay: 400 });
    })



  },
};
