import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ColorDirective } from '@vnodes/material/color';
import { IconDirective } from '@vnodes/material/icon';
import { ListComponent } from '@vnodes/material/list';

@Component({
  selector: 'vn-list[type="nav"]',
  imports: [
    RouterModule, MatListModule, MatIconModule, TitleCasePipe, IconDirective, ColorDirective
  ],
  template: `
    @let subtitle = title(); 

    <mat-nav-list >
      
      @if(subtitle){<h3 matSubheader vnColor="on-surface-variant">{{subtitle}}</h3>}
      
      @for (item of items(); track item) {
        <mat-list-item
          #link="routerLinkActive"
          routerLinkActive
          [routerLink]="item.route"
        >
            <div matListItemTitle>{{item.title| titlecase}}</div>
            
            @if(item.metadata){ 
              <div matListItemMeta>{{item.metadata}}</div>
            }

            @if(item.metadataIcon){ 
              <div matListItemMeta>
                <mat-icon vnIcon [vnIconFilled]="link.isActive" vnColor="primary" >{{item.metadataIcon}}</mat-icon>
              </div>
            }
            
            @if(item.avatar){ 
              <img matListItemAvatar [src]="item.avatar || 'favicon.png'" [alt]="item.title" >
            }

            @if(item.icon){ 
              <div matListItemIcon>
                <mat-icon vnIcon [vnIconFilled]="link.isActive" vnColor="primary">{{item.icon}}</mat-icon>
              </div>
            }
        </mat-list-item>
      }

    </mat-nav-list>
  `
})
export class ListNavComponent extends ListComponent { }
