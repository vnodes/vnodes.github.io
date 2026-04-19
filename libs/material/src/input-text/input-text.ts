import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, StringInputType } from '../input/input';

@Component({
  selector: 'vn-input[type="text"]',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  template: `
   

     
     <mat-form-field >
       <mat-label>{{ label() }}</mat-label>
       <input
       type="text"
       matInput
       [placeholder]="placeholder()"
       [value]="value()"
       [disabled]="disabled()"
       (input)="handleInput($event)"
       (blur)="handleBlur()"
       [minLength]="minLength()"
       [maxLength]="maxLength()"
       [required]="required()"
       [formControl]="formControl()"
       />
       @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
       
       <mat-error>Invalid Input</mat-error>
      </mat-form-field>

    `,
  styleUrls: ['../input/input.scss'],
})
export class InputTextComponent extends BaseInput<string, StringInputType> {
  minLength = input<number>(0)
  maxLength = input<number>(1000)

  protected override convertToValue(value: string): string | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    return value;
  }
}
