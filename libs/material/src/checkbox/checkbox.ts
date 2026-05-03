import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="check"], vn-input[type="checkbox"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  template: `
  <mat-checkbox
       [formControl]="formControl()"
       [disabled]="disabled()"
       [minlength]="minlength()"
       [maxlength]="maxlength()"
       [required]="required()"
  >
  {{label()}}
  </mat-checkbox>
  `
})
export class CheckboxComponent extends BaseInput<boolean> { }
