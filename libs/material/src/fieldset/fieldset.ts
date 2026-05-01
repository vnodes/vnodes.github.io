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
  `,
  styles: `
  *{ 
    user-select: none;
  }
  fieldset{ 
    width: 100%;
    border-radius: var(--box-radious, 1em);
    padding: 1em;
  
  }
  legend {
    padding-left: 1em;
    padding-right: 1em;
  }
  
  `,
})
export class FieldsetComponent {

  label = input.required<string>()
}
