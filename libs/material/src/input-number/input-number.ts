import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, NumberInputType } from '../input/input';
import { NumberFilterDirective } from '../number-filter/number-filter';


@Component({
  selector: 'vn-input[type="number"], vn-input[type="integer"]',
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
      (keydown)="handleKeyDown($event)"
      [vnNumberType]="type()"
      vnNumberFilter

      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
  `,
  styleUrls: ['../input/input.scss']
})
export class InputNumberComponent extends BaseInput<number, NumberInputType> {


  min = input<number | null>(null)
  max = input<number | null>(null)

  protected override convertToValue(value: string): number | null {


    if (value === '') {
      return 0;
    }

    if (value === '-') {
      return -0
    }



    if (value.endsWith('.')) {
      value = value + "0"
    }

    const parsedValue = this.type() === 'integer' ? parseInt(value) : parseFloat(value);
    const actualValue = isNaN(parsedValue) ? null : parsedValue;
    return actualValue

  }


  handleKeyDown(event: KeyboardEvent) {

  }

}
