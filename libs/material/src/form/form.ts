import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '[vnForm]',
  standalone: true,
  exportAs: "vnForm",
  template: `
      <ng-content select="vn-input, [vnInput]"></ng-content>
  `
})
export class FormComponent {
  formGroup = input.required<FormGroup>();


}


