import { Component } from '@angular/core';




@Component({
  selector: 'vn-form, [vnForm]',
  standalone: true,
  template: `
      <ng-content select="vn-input"></ng-content>
  `,
  styles: `
  
  `
})
export class FormComponent {
}
