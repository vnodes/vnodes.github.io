import { Component } from '@angular/core';

/**
 * Flexbox column container
 */
@Component({
  selector: 'vn-flex-col',
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'flex flex-col grow h-full w-full overflow-hidden overflow-y-auto',
  },
})
export class FlexCol { }
