import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../input/input';
import { IntFilterDirective } from '../int-filter/int-filter';

@Component({
  selector: 'vn-input-int',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, IntFilterDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputIntComponent),
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
      vnIntFilter
      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
    </mat-form-field>
  `,
  styles: ``,
})
export class InputIntComponent extends InputComponent {
  protected override convertToValue(value: string) {
    const parsedValue = parseInt(value);
    const currentValue = isNaN(parsedValue) ? null : parsedValue
    return currentValue
  }

}
