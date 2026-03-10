import type { Meta, StoryObj } from '@storybook/angular';
import { FlexRow } from './flex-row';

const meta: Meta<FlexRow> = {
  component: FlexRow,
  title: 'Container/FlexRow',
};
export default meta;

type Story = StoryObj<FlexRow>;

export const Primary: Story = {
  render() {
    return {
      template: `
      <vn-flex-row class="border-2 border-orange-400">
        <div>row 1</div>
        <div>row 2</div>
        <div>row 3</div>
      </vn-flex-row>`
    }
  }
};

