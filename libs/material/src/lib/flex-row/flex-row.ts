import { Component } from '@angular/core';

/**
 * Flex row container (flex flex-row justify-between grow w-full overflow-hidden h-full items-center)
 */
@Component({
  selector: 'vn-flex-row',
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'flex flex-row justify-start grow w-full overflow-hidden h-full items-center',
    '[class]': '""',
  },
})
export class FlexRow {}
