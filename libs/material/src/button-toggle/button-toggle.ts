import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';

export type ButtonToggleOption = {
  value: any;
  label: string;
}

@Component({
  selector: 'vn-input[type="button-toggle"], vn-input[type="buttons"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonToggleModule],
  template: `
  <mat-button-toggle-group 
       [formControl]="formControl()"
       [disabled]="disabled()"
       (input)="handleInput($event)"
       (blur)="handleBlur()"
       [minlength]="minlength()"
       [maxlength]="maxlength()"
       [required]="required()"
  >

  @for(option of options(); track option){ 


    <mat-button-toggle [value]="option.value">{{option.label }}</mat-button-toggle>
  }
  </mat-button-toggle-group>

  `
})
export class ButtonToggleComponent extends BaseInput { }
