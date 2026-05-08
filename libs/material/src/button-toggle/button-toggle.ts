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
  @let control = formControl();

  @if(control){ 

      <mat-button-toggle-group 
      matInput
      [formControl]="formControl()"
      [disabled]="disabled()"
      [minlength]="minlength()"
      [maxlength]="maxlength()"
      [required]="required()"
      [ariaLabel]="label()"
      [multiple]="multiple()"
      >
      
      @for(option of options(); track option){ 
        <mat-button-toggle [value]="option.value">{{option.label }}</mat-button-toggle>
      }
    </mat-button-toggle-group>
    
  }
  
  `
})
export class ButtonToggleComponent extends BaseInput<string | number> { }
