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
  <div #view="vnViewPort" vnViewPort vnFlexContainer>
    <!-- Main toolbar -->
    <mat-toolbar>
      <div vnFlexRow>
        <ng-content select="[vnLogo], vn-logo"><vn-logo></vn-logo></ng-content>
        <button matIconButton (click)="sidenav.toggle()" >
          <mat-icon>{{sidenav.opened ? "menu_open":"menu"}}</mat-icon>
        </button>
      </div>

      <div vnFlex="row"  vnFlexBetween>

        <div vnFlexRow>
          <ng-content select="[vnToolbarLeft]"></ng-content>
        </div>
        <div vnFlexRow>
          <ng-content aria-selected="vnToolbar"></ng-content>
        </div>  
        <div vnFlexRow>
          <ng-content select="[vnToolbarRight]"></ng-content>
        </div>
        
      </div>
      

    </mat-toolbar>
    

    <!-- Sidenav container  -->
    <mat-sidenav-container vnFlexContainer >
      
      <!-- Sidenav -->
      <mat-sidenav #sidenav [mode]="view.sidenavMode()" [opened]="view.sidenavOpen()">
        <div vnFlexContainer vnFlexBetween>
          <ng-content select="[vnSidenavTop]">
           
          </ng-content>
          <ng-content select="[vnSidenav]">
           
          </ng-content>
          <ng-content select="[vnSidenavBottom]">
           
          </ng-content>
        </div>
      </mat-sidenav>
      
      <!-- Sidenav content -->
      <mat-sidenav-content>
        <div vnFlexContainer>
          <ng-content select="[vnContentTop]">
            <vn-ng-test selector="vnContentTop"></vn-ng-test>
          </ng-content>
          <ng-content select="[vnContent]">
            <vn-ng-test selector="vnContent"></vn-ng-test>
          </ng-content>
          <div vnFlexGrow></div>
          <ng-content select="[vnContentBottom]">
            <vn-ng-test selector="vnContentBottom"></vn-ng-test>
          </ng-content>
        </div>

      </mat-sidenav-content>

    </mat-sidenav-container>

    <!-- Status bar  -->
    <mat-toolbar>   
      <div vnFlex="row"  vnFlexBetween>


        <div vnFlexRow>
            <ng-content select="[vnStatusbarLeft]"></ng-content>
        </div>

        <div vnFlexRow>
            <ng-content aria-selected="vnStatusbar"></ng-content>
        </div>  

        <div vnFlexRow>
            <ng-content select="[vnStatusbarRight]"></ng-content>
        </div>
        
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