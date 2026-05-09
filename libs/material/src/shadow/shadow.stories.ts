import type { Meta, StoryObj } from '@storybook/angular';
import { ShadowDirective } from './shadow';

const meta: Meta<ShadowDirective> = {
  component: ShadowDirective,
  title: 'Style/Shadow',
};
export default meta;

type Story = StoryObj<ShadowDirective>;

export const Primary: Story = {
  render() {
    return {
      moduleMetadata: { imports: [ShadowDirective] },
      template: `
      <style>
      div{ 
      display:flex; 
      flex-direction: row;
      gap: 0.5em;
      min-height:50px; 
      padding:1em;
      border-radius:1em;
      }
      
      </style>
      <div >
        <div vnShadow="0">shadow level 0</div>
        <div vnShadow="1">shadow level 1</div>
        <div vnShadow="2">shadow level 2</div>
        <div vnShadow="3">shadow level 3</div>
        <div vnShadow="4">shadow level 4</div>
        <div vnShadow="5">shadow level 5</div>
      </div>
    `,
    }
  }
};

