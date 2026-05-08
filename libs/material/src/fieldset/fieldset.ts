import { A11yModule } from "@angular/cdk/a11y";
import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-fieldset',
  imports: [A11yModule],
  template: `
  <fieldset [cdkTrapFocus]="true" >
    <legend>{{label()}}</legend>
    <ng-content></ng-content>
  </fieldset>
  `
})
export class FieldsetComponent {

  label = input.required<string>()
}
