import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'vn-root',
  template: `<vn-nx-welcome [title]="title"></vn-nx-welcome> <router-outlet></router-outlet>`,
  styles: ``,
})
export class App implements OnInit {
  titleManager = inject(Title);


  protected title = $localize`Hello World`;

  ngOnInit(): void {
    this.titleManager.setTitle(this.title)
  }
}
