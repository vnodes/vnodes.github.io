import { Directive, input } from '@angular/core';



/**
 * Add `.fill` class to the icon component 
 */
@Directive({
  selector: '[vnIconFill]',
  host: {
    '[class.fill]': 'vnIconFill()'
  }
})
export class IconFillDirective {
  vnIconFill = input(false)
}
