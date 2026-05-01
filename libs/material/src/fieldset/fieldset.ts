import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-fieldset',
  standalone: true,
  template: `
  <fieldset >
    <legend>{{label()}}</legend>
    <ng-content></ng-content>
  </fieldset>
  `,
  styles: `
  fieldset{ 
    width: 100%;
    border-radius: var(--box-radious, 1em);
  }
  legend {
    
    
  }
  
  `,
})
export class FieldsetComponent {

  label = input.required<string>()
}
