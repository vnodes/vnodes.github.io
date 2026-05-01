import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img ngSrc="favicon.png" [width]="width()" [height]="height()" [alt]="alt()" priority>`,
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.justify-content]': '"center"',
  }
})
export class LogoComponent {
  width = input(32)
  height = input(32)
  alt = input("")
}
