import type { Meta, StoryObj } from '@storybook/angular';
import { Layout } from './layout';

const meta: Meta<Layout> = {
  component: Layout,
  title: 'layout/Layout',
};
export default meta;

type Story = StoryObj<Layout>;

export const Primary: Story = {
  args: {},
};


export const Inventory: Story = {
  render() {
    return {
      template: `
      <vn-layout class="border-4 border-dashed border-orange-400">
  
        <ng-container  vnToolbarLeft> 
          <button matIconButton> <mat-icon>home</mat-icon></button>
          <button matIconButton> <mat-icon>home</mat-icon></button>
          <button matIconButton> <mat-icon>home</mat-icon></button>
        </ng-container>

        <ng-container  vnToolbarRight> 
          <button matIconButton> <mat-icon>home</mat-icon></button>
          <button matIconButton> <mat-icon>home</mat-icon></button>
          <button matIconButton> <mat-icon>home</mat-icon></button>
        </ng-container>

        <ng-container  vnSidenavTop> 
            <mat-nav-list>
              <a mat-list-item  routerLink="/" routerLinkActive="active-class" 
      #rla="routerLinkActive"> 
                <span matListItemIcon><mat-icon [class.fill]="rla.isActive">home</mat-icon></span>
                <span matListItemTitle>List item 1</span>
              </a>
              <a mat-list-item  routerLink="/" routerLinkActive="active-class" 
      #rla="routerLinkActive"> 
                <span matListItemIcon><mat-icon [class.fill]="rla.isActive">home</mat-icon></span>
                <span matListItemTitle>List item 1</span>
              </a>
            </mat-nav-list>
          
        </ng-container>

        <ng-container vnStatusbarLeft>
          <button matIconButton> <mat-icon>notifications</mat-icon></button>
        </ng-container>
        <ng-container vnStatusbarRight>
          <button matIconButton> <mat-icon>notifications</mat-icon></button>
        </ng-container>

      </vn-layout>
      `
    }
  }
}
export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    // await expect(canvas.getByText(/layout/gi)).toBeTruthy();
  },
};
