import { Directive, input } from '@angular/core';


export type NavListItem = {
  title: string;
  metadata?: string;
  metadataIcon?: string;
  route: string[];
  avatar?: string;
  icon?: string
}

@Directive()
export abstract class ListComponent {
  title = input<string>()
  items = input.required<NavListItem[]>();



}
