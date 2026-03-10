import { Component, computed, input, signal } from '@angular/core';

/**
 * Flexbox row container
 */
@Component({
  selector: 'vn-flex-row',
  template: `<ng-content ></ng-content>`,
  host: {
    "[class]": "hostClasses()"
  },
})
export class FlexRow {
  justifyEnd = input(false)
  flexGap = input(false)
  baseClasses = signal('flex flex-row grow w-full overflow-hidden h-full items-center');
  hostClasses = computed(() => {
    return `${this.baseClasses()} ${this.justifyEnd() ? "justify-end" : ""} ${this.flexGap() ? "gap-2" : ""}`
  })

}
