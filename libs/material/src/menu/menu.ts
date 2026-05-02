import { Component, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  label: string;
  route?: string[]
  children?: MenuItem[]
  icon?: string;
  matMenu?: MatMenu
}

@Component({
  selector: 'vn-menu',
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  template: `

@if(isSubMenuItems()){ 

  <mat-menu #menu >
  @for(item of items(); track item){ 
    @if(item.children){ 
        <button mat-menu-item [matMenuTriggerFor]="item.matMenu!"> {{item.label}}</button>
    } @else { 
        <button mat-menu-item [routerLink]="item.route"> {{item.label}}</button>
    }
  }
  </mat-menu>
} @else {
  <!-- Main Menu Items -->
  @for(item of items(); track item){ 
    @if(item.children){ 
      <button matButton [matMenuTriggerFor]="item.matMenu!"> {{item.label}}</button>
    } @else { 
      <button matButton [routerLink]="item.route"> {{item.label}}</button>
    }
  }
}

<!-- Create menues -->
@for(item of items(); track item){ 
  @if(item.children){ 
    <vn-menu #newMenu [items]="item.children" [isSubMenuItems]="true"></vn-menu>

    {{assignMenu(item,newMenu.childMenu)}}
  }

}
 `,
})
export class MenuComponent {
  items = input.required<MenuItem[]>();
  protected isSubMenuItems = input<boolean>(false)
  @ViewChild("menu") childMenu!: MatMenu



  assignMenu(item: MenuItem, menu: MatMenu) {
    item.matMenu = menu;
  }

}
