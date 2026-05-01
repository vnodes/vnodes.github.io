import { Directive, input } from '@angular/core';


@Directive({
  selector: '[vnIcon]',
  host: {
    '[class.fill]': 'vnIconFilled()'
  }
})
export class IconDirective {
  vnIconFilled = input(false);
}
