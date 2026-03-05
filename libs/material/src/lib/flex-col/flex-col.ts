import { Component } from '@angular/core';

/**
 * Flex column container (flex flex-col justify-between grow h-full w-full overflow-hidden overflow-y-auto)
 */
@Component({
  selector: 'vn-flex-col',
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'flex flex-col justify-start grow h-full w-full overflow-hidden overflow-y-auto',
    '[class]': '""',
  },
})
export class FlexCol {}
