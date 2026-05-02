import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu';

const meta: Meta<MenuComponent> = {
  component: MenuComponent,
  title: 'Menu/Menu',

};
export default meta;

type Story = StoryObj<MenuComponent>;

export const Primary: Story = {
  args: {
    items: [

      {
        label: "Services", children: [
          { label: "Servcie 1", route: ['about'] },
          { label: "Servcie 2", route: ['about'] },
          {
            label: "Servcie 3", route: ['about'],
            children: [
              { label: "Servcie 3 | 1", route: ['about'] },
              { label: "Servcie 3 | 2", route: ['about'] },
              { label: "Servcie 3 | 3", route: ['about'] },
              { label: "Servcie 3 | 4", route: ['about'] },
            ]

          },
        ]
      },
      {
        label: "Products", children: [
          { label: "Product 1", route: ['about'] },
          { label: "Product 2", route: ['about'] },
          {
            label: "Product 3", children: [
              { label: "Product 3 | 1", route: ['about'] },
              { label: "Product 3 | 2", route: ['about'] },
              { label: "Product 3 | 3", route: ['about'] },
              { label: "Product 3 | 4", route: ['about'] },
            ]
          },
        ]
      },
    ]
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvas }) => {
    // await expect(canvas.getByText(/Services/gi)).toBeTruthy();
  },
};
