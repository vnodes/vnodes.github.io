import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent } from 'storybook/test';
import { ButtonToggleComponent } from './button-toggle';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'Input/ButtonToggle',
};
export default meta;

type Story = StoryObj<ButtonToggleComponent>;

const args: Story['args'] = {

  options: [
    { value: 'First', label: 'First' },
    { value: 'Second', label: 'Second' },
    { value: 'Third', label: 'Third' },
  ],
  label: "Label",
  hint: "Hint"
}

export const Primary: Story = {
  args
};


export const Heading: Story = {
  args,
  play: async ({ canvas, step }) => {

    const first = canvas.getByText(/First/gi)
    const second = canvas.getByText(/Second/gi)
    const third = canvas.getByText(/Third/gi)

    step('should render the options', async ({ canvas }) => {
      await expect(first).toBeTruthy();
      await expect(second).toBeTruthy();
      await expect(third).toBeTruthy();
    });

    step("should click the options", async () => {
      await userEvent.click(first)
      await userEvent.click(second)
      await userEvent.click(third)
    })

  },
};
