import { computed, Directive, input } from '@angular/core';
import { ShadowLevel, shadowVar } from '@vnodes/material/common';

@Directive({
  selector: '[vnShadow]',
  host: {
    '[style.box-shadow]': 'vnvnShadowComputed()',
  }
})
export class ShadowDirective {
  vnShadow = input.required<ShadowLevel>()
  protected vnvnShadowComputed = computed(() => shadowVar(this.vnShadow()))

}
