import { computed, Directive, input } from '@angular/core';
import { Color, colorVar } from '@vnodes/material/common';


/**
 * Directive to set elements's style color from the angular-theme variables
 */
@Directive({
  selector: `[vnColor]`,
  host: {
    '[style.color]': 'vnColorComputed()',
  }
})
export class ColorDirective {

  /**
   * Text color variable {@link Color}
   */
  vnColor = input.required<Color>();

  protected vnColorComputed = computed(() => colorVar(this.vnColor()))
}



/**
 * Directive to set elements's style color from the angular-theme variables
 */
@Directive({
  selector: `[vnBgColor]`,
  host: {
    '[style.backgroundColor]': 'vnBgColorComputed()',
  }
})
export class BgColorDirective {

  /**
   * Background color variable {@link Color}
   */
  vnBgColor = input.required<Color>();

  protected vnBgColorComputed = computed(() => colorVar(this.vnBgColor()))
}


















































