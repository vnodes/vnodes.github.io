import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vn-form, [vnForm]',
  exportAs: "vnForm",
  template: `
      <ng-content select="vn-input, [vnInput]"></ng-content>
  `
})
export class FormComponent {
  readonly formGroup = input.required<FormGroup>();
  
}


