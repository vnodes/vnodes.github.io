import { type Meta, type StoryObj } from '@storybook/angular';
import { InputText } from './input-text';


const meta: Meta<InputText> = {
  component: InputText,
  title: 'Input/InputText',
};
export default meta;

type Story = StoryObj<InputText>;

export const Text: Story = {
  args: {
    label: "Input label ",
    hint: "Input hint",
    value: 'DF'
  },
};

export const ShortText: Story = {
  args: {
    ...Text.args,
    minLength: 3,
    maxLength: 5,
    required: true,
    hint: "Text with 3-5 characters"
  }
}

export const LongText: Story = {
  args: {
    ...Text.args,
    maxLength: 400,
    hint: "Long text with 400 chracters"
  }
}


export const TextWithSuffixIcon: Story = {
  args: {
    ...Text.args,
    suffixIcon: "input"
  }
}

export const TextWithPrefixIcon: Story = {
  args: {
    ...Text.args,
    prefixIcon: "input"
  }
}

// export const Heading: Story = {
//   ...Text,
//   play: async ({ canvas }) => {
//     await expect(canvas.getByText(/Input label/gi)).toBeTruthy();
//   },
// };
