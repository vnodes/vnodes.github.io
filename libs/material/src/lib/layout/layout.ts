import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProjectionModule, Viewport } from '@vnodes/cdk';
import { AppLogo } from '../app-logo/app-logo';
import { FlexCol } from '../flex-col/flex-col';
import { FlexRow } from '../flex-row/flex-row';
@Component({
  selector: 'vn-layout',
  imports: [

    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ProjectionModule,
    MatDividerModule,
    AppLogo,
    Viewport,
    FlexCol,
    FlexRow,
  ],
  templateUrl: "./layout.html",
  host: {
    class: "w-full h-full flex flex-col border-4 border-green-400"
  }
})
export class Layout {


  readonly _fullContainer = `
      !flex !flex-col grow !w-auto
      !max-w-full !h-full !overflow-hidden
  `;

  readonly _sideNav = '!flex !flex-col !grow h-full !w-fit !rounded-none';

}
