import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '../input/input';

@Component({
  selector: 'vn-input-number',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
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
      type="number"
      matInput
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (blur)="handleBlur()"
      [min]="min()"
      [max]="max()"
      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
  `,
  styles: ``,
})
export class InputNumberComponent extends BaseInput {

  isInteger = input(false);

  min = input<number | null>(null)
  max = input<number | null>(null)




  protected override convertToValue(value: string) {

    try {
      const parsedValue = this.isInteger() ? parseInt(value) : parseFloat(value);
      const actualValue = isNaN(parsedValue) ? null : parsedValue;
      return actualValue
    } catch {
      return null;
    }
  }
}
