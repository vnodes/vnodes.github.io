import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-image',
  template: `<img
    [src]="src()"
    [alt]="alt()"
    class="h-auto max-h-full w-auto max-w-full "
    [style.width]="width() + 'px'"
    [style.height]="height() + 'px'"
  />`,
  standalone: true,
  host: {
    class: 'h-full',
  },
})
export class Image {
  width = input<number>();
  height = input<number>();
  src = input('favicon.ico');
  alt = input('');
}
