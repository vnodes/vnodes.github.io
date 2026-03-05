import { MatToolbarModule } from '@angular/material/toolbar';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { AppLogo } from './app-logo';

const meta: Meta<AppLogo> = {
  component: AppLogo,
  title: 'Image/AppLogo',
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
  render() {
    return {
      template: `
      <mat-toolbar>
        <vn-app-logo ></vn-app-logo>
      </mat-toolbar>
      `,
    };
  },
};
export default meta;

type Story = StoryObj<AppLogo>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {
    alt: 'App Logo',
    src: 'favicon.png',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByAltText(/App Logo/gi)).toBeTruthy();
  },
};
