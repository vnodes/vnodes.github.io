import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="check"], vn-input[type="checkbox"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule
  ],
  template: `
  <mat-checkbox
       matInput
       [formControl]="formControl()"
       [disabled]="disabled()"
       (input)="handleInput($event)"
       (blur)="handleBlur()"
       [minlength]="minlength()"
       [maxlength]="maxlength()"
       [required]="required()"
  >
  {{label()}}
  </mat-checkbox>
  `
})
export class CheckboxComponent extends BaseInput { }
