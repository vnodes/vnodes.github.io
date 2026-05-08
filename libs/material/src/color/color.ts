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
   * {@link Color}
   */
  vnColor = input.required<Color>();

  vnColorComputed = computed(() => colorVar(this.vnColor()))
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
   * {@link Color}
   */
  vnBgColor = input.required<Color>();

  vnBgColorComputed = computed(() => colorVar(this.vnBgColor()))
}


















































