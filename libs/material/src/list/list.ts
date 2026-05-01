import { Directive, input } from '@angular/core';


export type NavListItem = {
  title: string;
  metadata?: string;
  route: string[];
  avatar?: string;
  icon?: string
}

@Directive()
export abstract class ListComponent {
  items = input.required<NavListItem[]>();
}
