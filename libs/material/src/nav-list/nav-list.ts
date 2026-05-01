import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ListComponent } from '@vnodes/material/list';

@Component({
  selector: 'vn-list[type="nav"]',
  imports: [
    RouterModule, MatListModule, MatIconModule, TitleCasePipe
  ],
  template: `
      
    <mat-nav-list >
      @for (item of items(); track item) {

        
        <a
          mat-list-item
          #link="routerLinkActive"
          routerLinkActive
          [routerLink]="item.route"
          [class.active]="link.isActive"
          >
            <div matListItemTitle>{{item.title| titlecase}}</div>
            <img matListItemAvatar [src]="item.avatar || 'favicon.png'" [alt]="item.title" >
            <div matListItemMeta></div>
          </a>
      }

    </mat-nav-list>

  `,
})
export class NavListComponent extends ListComponent { }
