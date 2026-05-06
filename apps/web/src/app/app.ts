import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutAppModule } from '@vnodes/material/layout-app';
import { NavListItem } from '@vnodes/material/list';
import { ListNavComponent } from '@vnodes/material/list-nav';

@Component({
  imports: [RouterModule, LayoutAppModule, ListNavComponent],
  selector: 'vn-root',
  template: `
  <vn-layout type="app">
    <div vnSidenav>
        <vn-list type="nav" [items]="items"></vn-list>
    </div>
    <router-outlet vnContentTop></router-outlet>
  </vn-layout>
  `,
})
export class App {
  items: NavListItem[] = [
    { route: ["home"], title: "Home", },
    { route: ["about"], title: "About", },
    { route: ["service"], title: "Services", },
  ]
}
