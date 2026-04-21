import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, NumberInputType } from '@vnodes/material/input';
import { NumberFilterDirective } from '../number-filter/number-filter';

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
      [maxlength]="maxLength()"
      [required]="required()"
      [vnNumberFilter]="type()"     
     
      />
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
      <mat-error>Invalid Input</mat-error>
    </mat-form-field>
  }
    `,
  styleUrls: ['../input/input.scss'],
})
export class InputNumberComponent extends BaseInput<number, NumberInputType> {
  min = input<number>(Number.MIN_SAFE_INTEGER)
  max = input<number>(Number.MAX_SAFE_INTEGER)
  maxLength = input<number>(16);

  protected override convertToValue(value: string): any {

    if (value === null || value === undefined || value === '') {
      return null
    }

    const parsedValue = this.type() === 'integer'
      ? parseInt(value, 10)
      : parseFloat(value);

    return isNaN(parsedValue) ? null : parsedValue;

  }
}
