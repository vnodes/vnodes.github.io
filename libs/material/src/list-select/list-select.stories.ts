import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent } from 'storybook/test';
import { InputOption } from '../input/input';
import { ListSelectComponent } from './list-select';

const meta: Meta<ListSelectComponent> = {
  component: ListSelectComponent,
  title: 'Input/List',

  argTypes: {
    handleValueChange: { action: "value" }
  }
};
export default meta;

type Story = StoryObj<ListSelectComponent>;

const label = 'List select'

const options: InputOption[] = [
  { label: "First", value: "First" },
  { label: "Second", value: "Second" },
  { label: "Third", value: "Third" },
]

export const Single: Story = {
  args: {
    label,
    options
  },
};


export const Multiple: Story = {
  args: {
    ...Single.args,
    multiple: true
  }
};



export const Heading: Story = {
  ...Single,
  play: async ({ canvas, canvasElement, step }) => {

    const optionElms = canvas.getAllByRole('option');
    const labelElm = canvas.getByText(new RegExp(`${label}`, 'gi'));

    const componentElement = canvasElement.querySelector('vn-input[type="list"]');
    const instance = (window as any).ng.getComponent(componentElement) as ListSelectComponent;

    await step('should be defined', () => {
      expect(instance).toBeDefined();
    })

    await step("Should have label", async () => {
      await expect(labelElm).toBeTruthy();
    })

    await step("Should have all defined options", () => {
      expect(optionElms).toHaveLength(options.length + 1)
    })


    await step('should click on each option', async () => {
      for (const o of optionElms) {
        await userEvent.click(o, { delay: 200 });
      }

    })
  },
};
