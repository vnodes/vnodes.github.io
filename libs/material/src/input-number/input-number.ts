import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, InputType } from '@vnodes/material/input';
import { NumberFilterDirective } from '@vnodes/material/number-filter';


@Component({
  selector: 'vn-input[type=number], vn-input[type=integer]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NumberFilterDirective
  ],
  template: `

  @let control =  formControl(); 

  @if(control) { 
    <mat-form-field  >
      <mat-label>{{ label() }}</mat-label>
      <input
      type="text"
      matInput
      [formControl]="formControl()"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (blur)="handleBlur()"
      [min]="min()"
      [max]="max()"
      [maxlength]="maxlength()"
      [required]="required()"
      vnNumberFilter
      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
  }
    `
})
export class InputNumberComponent extends BaseInput<number> {
  type = input.required<InputType>();
  min = input<number>(Number.MIN_SAFE_INTEGER)
  max = input<number>(Number.MAX_SAFE_INTEGER)
  maxlength = input<number>(16);

  protected override convertToValue(value: string) {

    if (value === null || value === undefined || value === '') {
      return null
    }

    const parsedValue = this.type() === 'integer'
      ? parseInt(value, 10)
      : parseFloat(value);

    return isNaN(parsedValue) ? null : parsedValue;

  }
}
