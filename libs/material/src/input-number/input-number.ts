import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, NumberInputType } from '../input/input';
import { NumberFilterDirective } from '../number-filter/number-filter';





@Component({
  selector: 'vn-input[type=number], vn-input[type=integer]',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NumberFilterDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
  template: `
  <mat-form-field>
      <mat-label>{{ label() }}</mat-label>
      <input
      type="text"
      matInput
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (blur)="handleBlur()"
      [min]="min()"
      [max]="max()"
      [vnNumberFilter]="type()"
      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
  `,
  styleUrls: ['../input/input.scss']
})
export class InputNumberComponent extends BaseInput<number, NumberInputType> {
  min = input<number>(Number.MIN_SAFE_INTEGER)
  max = input<number>(Number.MAX_SAFE_INTEGER)


  protected override convertToValue(value: string): any {
    // 1. Handle empty input immediately
    if (value === null || value === undefined || value === '') {
      return this.defaultValue();
    }

    // 2. Parse based on the type input signal
    const parsedValue = this.type() === 'integer'
      ? parseInt(value, 10)
      : parseFloat(value);

    // 3. Safety check for NaN (Not a Number)
    // This happens if the user clears the input or types invalid chars
    return isNaN(parsedValue) ? this.defaultValue() : parsedValue;

  }
}
