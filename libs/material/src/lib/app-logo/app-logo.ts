import { Component, input } from '@angular/core';
import { Image } from '../image/image';

@Component({
  selector: 'vn-app-logo',
  imports: [Image],
  template: `<vn-image [src]="src()" [alt]="alt()" />`,
  standalone: true,
  host: {
    class: 'h-full p-2',
    '[class]': "''",
  },
})
export class AppLogo {
  /** Image source url */
  src = input('favicon.png');

  /** Image description */
  alt = input('App Logo');
}
