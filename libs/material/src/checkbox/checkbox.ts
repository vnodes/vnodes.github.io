import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="check"], vn-input[type="checkbox"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  template: `
  @let control = formControl(); 

  @if(control){ 
    <mat-checkbox
    [formControl]="formControl()"
    [disabled]="disabled()"
    [minlength]="minlength()"
    [maxlength]="maxlength()"
    [required]="required()"
    [labelPosition]="labelPosition()"
    >
    {{label()}}
  </mat-checkbox>
  }
  `
})
export class CheckboxComponent extends BaseInput<boolean> {
  labelPosition = input<MatCheckbox['labelPosition']>('after');
}
