import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { NavListComponent } from './nav-list';

const meta: Meta<NavListComponent> = {
  component: NavListComponent,
  title: 'List/Nav',
};
export default meta;

type Story = StoryObj<NavListComponent>;

export const Primary: Story = {

  args: {
    title: "Sample title",
    items: [
      { title: "Home", metadataIcon: "home", route: [''], icon: "home" },
      { title: "About", metadataIcon: "info", route: ['about'], icon: "info" },
      { title: "Services", metadataIcon: "apps", route: ['services'], icon: "apps" },
    ]
  }
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Home/g)).toBeTruthy();
    await expect(canvas.getByText(/About/g)).toBeTruthy();
    await expect(canvas.getByText(/Services/g)).toBeTruthy();
  },
};
