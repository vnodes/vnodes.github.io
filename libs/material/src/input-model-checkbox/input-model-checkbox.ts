import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputModel } from '@vnodes/material/input-model';

@Component({
  selector: 'vn-input[type="checkbox"][value]',
  imports: [MatCheckboxModule],
  template: `
  value: {{value()}}
  @let __value = value();
  @let __label = label();
  <mat-checkbox
  [checked]="__value" 
  
  [ariaChecked]="__value"
  [ariaChecked]="__value"
  (change)="value.update(()=>$event.checked)" 
  >
  {{__label}}
</mat-checkbox>
  `,
})
export class InputModelCheckboxComponent extends InputModel<boolean, 'checkbox'> {
}
