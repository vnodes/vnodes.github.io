import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BaseInput } from '@vnodes/material/input';

export type ButtonToggleOption = {
  value: any;
  label: string;
}

@Component({
  selector: 'vn-input[type="button-toggle"], vn-input[type="buttons"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonToggleModule],
  template: `

  @let __control =  formControl(); 
  @let __options =  options();
  @let __disabled = disabled();
  @let __minlength = minlength();
  @let __maxlength = maxlength();
  @let __required = required();
  @let __multiple = multiple();
  @let __label =    label();

   @if(__control){ 
    
      <mat-button-toggle-group 
        [formControl]="__control"
        [disabled]="__disabled"
        [minlength]="__minlength"
        [maxlength]="__maxlength"
        [required]="__required"
        [multiple]="__multiple"
        [ariaLabel]="__label"
      >
      @for(option of __options; track option.value){ 
        <mat-button-toggle [value]="option.value">{{option.label }}</mat-button-toggle>
      }
    </mat-button-toggle-group>
    
  }
  
  `
})
export class ButtonToggleComponent extends BaseInput<string | number> { }
