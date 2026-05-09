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

   @let __control =  formControl(); 
   @let __label = label();

   @let __minlength =minlength(); 
   @let __maxlength =maxlength(); 
   @let __required = required(); 
   @let __disabled= disabled();
   @let __labelPosition= labelPosition();


  @if(__control){ 
    <mat-checkbox
    [formControl]="__control"
    [minlength]="__minlength"
    [maxlength]="__maxlength"
    [required]="__required"
    [labelPosition]="__labelPosition"
    [disabled]="__disabled"
    [ariaLabel]="__label"
    >
    {{__label}}
  </mat-checkbox>
  }
  `
})
export class CheckboxComponent extends BaseInput<boolean> {
  /**
   * Label position `before` or `after`
   */
  labelPosition = input<MatCheckbox['labelPosition']>('after');
}
