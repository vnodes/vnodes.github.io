import type { Meta, StoryObj } from '@storybook/angular';
import { FlexCol } from './flex-col';

const meta: Meta<FlexCol> = {
  component: FlexCol,
  title: 'Container/FlexCol',
};
export default meta;

type Story = StoryObj<FlexCol>;

export const Primary: Story = {
  render() {
    return {
      template: `
      <vn-flex-col class="border-2 border-orange-400">
        <div>Col 1</div>
        <div>Col 2</div>
        <div>Col 3</div>
      </vn-flex-col>`
    }
  }
};
