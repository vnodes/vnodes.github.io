import { Component, isDevMode, NgModule } from '@angular/core';
import { FlexModule } from '@vnodes/material/flex';
import { Layout, LayoutCommonModule, LayoutPositionModule, NgTestSelector } from '@vnodes/material/layout';
import { LogoComponent } from '@vnodes/material/logo';

@Component({
  selector: 'vn-layout[type=app]',
  imports: [
    LayoutCommonModule,
    LayoutPositionModule,
    FlexModule,
    LogoComponent,
    NgTestSelector
  ],
  template: `

  @let isHovered = false; 
  
  
  @if(isHovered){ 
    IsHoverer
  }
  <div #view="vnViewPort" vnViewPort vnFlexContainer  >
    <!-- Main toolbar -->
    <mat-toolbar>
      <div vnFlexRow>
        <ng-content select="[vnLogo], vn-logo"><vn-logo></vn-logo></ng-content>
        <button matIconButton (click)="sidenav.toggle()" >
          <mat-icon>{{sidenav.opened ? "menu_open":"menu"}}</mat-icon>
        </button>
      </div>

      <div vnFlexRow vnFlexBetween>
          <ng-content select="[vnToolbarLeft]">
            <button matIconButton title="Sample Button"> 
              <mat-icon >home</mat-icon>
            </button>
          </ng-content>
          <ng-content select="[vnToolbar]">
            <vn-ng-test selector="vnToolbar"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnToolbarRight]">
            <button matIconButton>
                <mat-icon>apps</mat-icon>
            </button>
          </ng-content>
      </div>

    </mat-toolbar>
    

    <!-- Sidenav container  -->
    <mat-sidenav-container vnFlexContainer  >
      
      <!-- Sidenav -->
      <mat-sidenav #sidenav [mode]="view.sidenavMode()" [opened]="view.sidenavOpen()"  >
        <div vnFlexContainer vnFlexBetween>
          <ng-content select="[vnSidenavTop]">
            <vn-ng-test selector="vnSidenavTop"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnSidenav]">
            <vn-ng-test selector="vnSidenav"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnSidenavBottom]">
            <vn-ng-test selector="vnSidenavBottom"></vn-ng-test>
          </ng-content>
        </div>
      </mat-sidenav>
      
      <!-- Sidenav content -->
      <mat-sidenav-content>
        <div vnFlexContainer vnFlexBetween>
          <ng-content select="[vnContentTop]">
            <vn-ng-test selector="vnContentTop"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnContent]">
            <vn-ng-test selector="vnContent"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnContentBottom]">
            <vn-ng-test selector="vnContentBottom"></vn-ng-test>
          </ng-content>
        </div>

      </mat-sidenav-content>

    </mat-sidenav-container>

    <!-- Status bar  -->
    <mat-toolbar>
      <div vnFlexRow vnFlexBetween>
        <ng-content select="[vnStatusbarLeft]">
          <vn-ng-test selector="vnStatusbarLeft"></vn-ng-test>
        </ng-content>
        <ng-content select="[vnStatusbar]">
          <vn-ng-test selector="vnStatusbar"></vn-ng-test>
        </ng-content>
        <ng-content select="[vnStatusbarRight]">
          <button matIconButton title="Sample button">
            <mat-icon class="fill">notifications</mat-icon>
          </button>
        </ng-content>
      </div>
    </mat-toolbar>
    <!--  -->
  </div>
    `,
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
  }
})
export class LayoutAppComponent extends Layout {

  ngContent(selector: string) {
    if (isDevMode()) {

      return selector
    }
    return ''
  }
}




const layoutAppComponents = [
  LayoutAppComponent,
  LayoutPositionModule
]
@NgModule({
  imports: [...layoutAppComponents],
  exports: [...layoutAppComponents]
})
export class LayoutAppModule { }