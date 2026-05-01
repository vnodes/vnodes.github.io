import { computed, Directive, input } from '@angular/core';
import { Color, colorVar } from '@vnodes/material/common';

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

















































