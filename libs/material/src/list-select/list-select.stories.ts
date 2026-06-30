import type { Meta, StoryObj } from '@storybook/angular';
import { InputOption } from '@vnodes/material/input';
import { expect, userEvent } from 'storybook/test';
import { ListSelectComponent } from './list-select';

const meta: Meta<ListSelectComponent<string>> = {
  component: ListSelectComponent,
  title: 'Input/List',
};

export default meta;

type Story = StoryObj<ListSelectComponent<string>>;

const label = 'Label';

const options: InputOption<string>[] = [
  { label: 'First', value: 'First' },
  { label: 'Second', value: 'Second' },
  { label: 'Third', value: 'Third' },
];

export const Single: Story = {
  args: {
    label,
    options,
  },
};

export const Multiple: Story = {
  args: {
    ...Single.args,
    multiple: true,
  },
};

export const Heading: Story = {
  ...Single,
  play: async ({ canvas, step }) => {
    const firstOption = await canvas.getByText('First');
    const secondOption = await canvas.getByText('Second');
    const thirdOption = await canvas.getByText('Third');

    await step('should render options', async () => {
      expect(firstOption).toBeDefined();
      expect(secondOption).toBeDefined();
      expect(thirdOption).toBeDefined();
    });

    await step('should click options', async () => {
      await userEvent.click(firstOption, { delay: 400 });
      await userEvent.click(secondOption, { delay: 400 });
      await userEvent.click(thirdOption, { delay: 400 });
    });
  },
};
