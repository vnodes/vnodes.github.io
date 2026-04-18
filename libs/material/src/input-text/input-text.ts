import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputNumberComponent } from '../input-number/input-number';
import { BaseInput, StringInputType } from '../input/input';

@Component({
  selector: 'vn-input[type="text"]',
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
      type="text"
      matInput
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (blur)="handleBlur()"

      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
    `,
  styleUrls: ['../input/input.scss']
})
export class InputTextComponent extends BaseInput<string, StringInputType> {

  protected override convertToValue(value: string) {

    value = value.trim();

    if (value === '') {
      return null;
    }
    return value;
  }
}
